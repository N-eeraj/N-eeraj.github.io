import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import Navbar from "@components/Layout/Navbar"
import BlogLayoutWrapper from "@blogs/components/LayoutWrapper"
import "@blogs/styles/index.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Blogs",
    default: "Blogs",
  },
}

function BlogLayout({ children }: PropsWithChildren) {
  return (
    <BlogLayoutWrapper>
      <Navbar />
      {children}
    </BlogLayoutWrapper>
  )
}

export default BlogLayout
