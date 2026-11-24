import type { MetadataRoute } from 'next'

const baseUrl = 'https://paulapostol.ro'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/politica-de-confidentialitate`, priority: 0.3 },
  ]
}
