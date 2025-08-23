import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface DocMeta {
  title: string
  description: string
  featured?: boolean
  slug: string
  slugAsParams: string
}

export interface Doc extends DocMeta {
  content: string
  body: {
    raw: string
  }
}

function getAllMDXFiles(dir: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMDXFiles(fullPath, arrayOfFiles)
    } else if (file.endsWith('.mdx')) {
      arrayOfFiles.push(fullPath)
    }
  })

  return arrayOfFiles
}

export function getAllDocs(): DocMeta[] {
  const mdxFiles = getAllMDXFiles(contentDirectory)
  
  return mdxFiles.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    
    // Get relative path from content directory
    const relativePath = path.relative(contentDirectory, filePath)
    const slug = relativePath.replace(/\.mdx$/, '')
    
    return {
      title: data.title || '',
      description: data.description || '',
      featured: data.featured || false,
      slug: `/${slug}`,
      slugAsParams: slug,
    }
  })
}

export function getDocBySlug(slug: string): Doc | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    return {
      title: data.title || '',
      description: data.description || '',
      featured: data.featured || false,
      slug: `/${slug}`,
      slugAsParams: slug,
      content,
      body: {
        raw: content
      }
    }
  } catch (error) {
    return null
  }
}

// Mimic contentlayer's allDocs export for easier migration
export const allDocs = getAllDocs()