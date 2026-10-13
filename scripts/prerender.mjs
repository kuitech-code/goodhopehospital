import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import React, { StrictMode, createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { createServer } from 'vite'

const projectRoot = process.cwd()
const outputDirectory = resolve(projectRoot, 'dist')
const vite = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
})

try {
  const [{ AppRoutes }, seo] = await Promise.all([
    vite.ssrLoadModule('/src/App.jsx'),
    vite.ssrLoadModule('/src/data/seo.js'),
  ])
  const template = await readFile(join(outputDirectory, 'index.html'), 'utf8')
  const manifest = JSON.parse(await readFile(join(outputDirectory, '.vite/manifest.json'), 'utf8'))
  const assetReplacements = Object.entries(manifest)
    .filter(([source]) => source.startsWith('src/assets/'))
    .map(([source, asset]) => [`/${source}`, `/${asset.file}`])

  for (const pathname of seo.getPrerenderPaths()) {
    const metadata = seo.getSeoMetadata(pathname)
    const url = new URL(pathname, seo.SITE_URL).href
    const renderedMarkup = renderToString(
      createElement(
        StaticRouter,
        { location: pathname },
        createElement(StrictMode, null, createElement(AppRoutes)),
      ),
    )
    const resourceHints = renderedMarkup.match(/^(?:<link\b[^>]*rel="preload"[^>]*\/>)+/)?.[0] ?? ''
    const markup = renderedMarkup.slice(resourceHints.length)
    const head = `
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}" />
    <meta name="robots" content="${metadata.noindex ? 'noindex, follow' : 'index, follow'}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:image" content="${seo.SITE_URL}/logo.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${metadata.title}" />
    <meta property="twitter:description" content="${metadata.description}" />
    <meta property="twitter:image" content="${seo.SITE_URL}/logo.png" />`

    let html = template.replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/, head)
    html = html.replace('</head>', `${resourceHints}</head>`)
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    html = assetReplacements.reduce(
      (output, [source, asset]) => output.replaceAll(source, asset),
      html,
    )

    const relativePath = pathname === '/' ? 'index.html' : `${pathname.slice(1)}/index.html`
    const destination = join(outputDirectory, relativePath)
    await mkdir(resolve(destination, '..'), { recursive: true })
    await writeFile(destination, html)
  }
} finally {
  await vite.close()
}