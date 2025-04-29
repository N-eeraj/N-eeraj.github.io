import { PropsWithChildren } from "react"
import type { Metadata } from "next"
import Navbar from "@components/Layout/Navbar"

export const metadata: Metadata = {
  title: {
    template: "%s | Blogs",
    default: "Blogs",
  },
}

function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default BlogLayout
