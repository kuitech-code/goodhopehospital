import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoMetadata, SITE_URL } from '../data/seo'

const updateMeta = (selector, attribute, value, create) => {
  let element = document.head.querySelector(selector)

  if (!element && create) {
    element = document.createElement(create)
    document.head.appendChild(element)
  }

  if (element) element.setAttribute(attribute, value)
}

const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getSeoMetadata(pathname)
    const url = new URL(pathname, SITE_URL).href

    document.title = metadata.title
    updateMeta('meta[name="description"]', 'content', metadata.description, 'meta')
    updateMeta('meta[name="robots"]', 'content', metadata.noindex ? 'noindex, follow' : 'index, follow', 'meta')
    updateMeta('link[rel="canonical"]', 'href', url, 'link')
    updateMeta('meta[property="og:url"]', 'content', url, 'meta')
    updateMeta('meta[property="og:title"]', 'content', metadata.title, 'meta')
    updateMeta('meta[property="og:description"]', 'content', metadata.description, 'meta')
    updateMeta('meta[property="twitter:url"]', 'content', url, 'meta')
    updateMeta('meta[property="twitter:title"]', 'content', metadata.title, 'meta')
    updateMeta('meta[property="twitter:description"]', 'content', metadata.description, 'meta')
  }, [pathname])

  return null
}

export default Seo