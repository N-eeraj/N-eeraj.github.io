import type { Metadata } from "next"
import type { BlogDetails } from "@customTypes/blogs"

export function generateBlogMetadata({ title, description, coverImage }: BlogDetails, keywords: Array<string>): Metadata {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      images: [
        coverImage.src,
      ],
    },
    twitter: {
      title: title,
      description: description,
      images: [
        coverImage.src,
      ],
    },
    keywords,
  }
}

export function generateNpmPackageMetadata(packageName: string, description: string, keywords: Array<string>): Metadata {
  return {
    title: packageName,
    description: description,
    openGraph: {
      title: `${packageName} | Npm Packages`,
      description: description,
      type: "website",
    },
    twitter: {
      title: `${packageName} | Npm Packages`,
      description: description,
    },
    keywords,
  }
}
