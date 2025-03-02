import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Replace with your actual domain name
const baseUrl = 'https://paulapostol.ro'

// Function to get all routes recursively from the app directory
function getRoutes(dir: string, rootDir: string = dir): string[] {
  let routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    
    // Skip certain directories and files
    if (
      entry.name === 'api' || 
      entry.name.startsWith('_') || 
      entry.name.startsWith('.') ||
      entry.name === 'components' ||
      entry.name === 'fonts' ||
      entry.name === 'layout.tsx' ||
      entry.name === 'globals.css' ||
      entry.name === 'robots.ts' ||
      entry.name === 'sitemap.ts'
    ) {
      continue
    }

    if (entry.isDirectory()) {
      routes = [...routes, ...getRoutes(entryPath, rootDir)]
    } else if (
      entry.name === 'page.tsx' || 
      entry.name === 'page.js' || 
      entry.name === 'page.jsx' || 
      entry.name === 'page.mdx'
    ) {
      // Get the route path relative to the app directory
      let routePath = dir.replace(rootDir, '')
      
      // Convert Windows path separators to URL format
      routePath = routePath.replace(/\\/g, '/')
      
      // Handle the root page
      if (routePath === '') {
        routes.push('/')
      } else {
        routes.push(routePath)
      }
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Get the current date for lastModified
  const currentDate = new Date()
  
  // Get all routes from the app directory
  const appDirectory = path.join(process.cwd(), 'app')
  const routePaths = getRoutes(appDirectory)
  
  // Create sitemap entries
  const routes = routePaths.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
  } as const))
  
  return routes
} 