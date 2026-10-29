import services from './services'

export const SITE_URL = 'https://goodhopenyahururuhospital.co.ke'

const siteName = 'Goodhope Nyahururu Hospital'
const locationSuffix = ' at Goodhope Nyahururu Hospital in Laikipia, Kenya.'

const fitDescription = (description) => {
  if (description.length <= 160) return description
  return `${description.slice(0, 157).trimEnd()}...`
}

export const getSeoMetadata = (pathname) => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/') {
    return {
      title: `${siteName} | Compassionate Care in Nyahururu`,
      description: 'Compassionate hospital and nursing care in Nyahururu, Kenya. Explore Goodhope Nyahururu Hospital services and contact our team.',
    }
  }

  if (normalizedPath === '/services') {
    return {
      title: `Hospital Services in Nyahururu | ${siteName}`,
      description: 'Explore medical, maternity, laboratory, dental, emergency, and home nursing services at Goodhope Nyahururu Hospital in Laikipia, Kenya.',
    }
  }

  const service = normalizedPath.startsWith('/services/')
    ? services.find(({ slug }) => slug === normalizedPath.slice('/services/'.length))
    : undefined

  if (service) {
    return {
      title: `${service.title} in Nyahururu | ${siteName}`,
      description: fitDescription(`${service.short}${locationSuffix}`),
    }
  }

  const pages = {
    '/about': {
      title: `About Us | ${siteName}`,
      description: 'Learn about Goodhope Nyahururu Hospital and our commitment to professional, compassionate healthcare in Laikipia, Kenya.',
    },
    '/contact': {
      title: `Contact and Appointments | ${siteName}`,
      description: 'Contact Goodhope Nyahururu Hospital in Laikipia for appointments, directions, and information about our healthcare services.',
    },
    '/insurance': {
      title: `Insurance and Payment | ${siteName}`,
      description: 'View insurance information and payment options for care at Goodhope Nyahururu Hospital in Laikipia, Kenya.',
    },
    '/privacy': {
      title: `Privacy Policy | ${siteName}`,
      description: 'Read the privacy policy for the Goodhope Nyahururu Hospital website.',
    },
  }

  return pages[normalizedPath] ?? {
    title: `Page Not Found | ${siteName}`,
    description: 'The requested page could not be found.',
    noindex: true,
  }
}

export const getPrerenderPaths = () => [
  '/',
  '/services',
  ...services.map(({ slug }) => `/services/${slug}`),
  '/insurance',
  '/about',
  '/contact',
  '/privacy',
]