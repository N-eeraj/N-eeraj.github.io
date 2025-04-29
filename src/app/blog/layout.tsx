import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Navbar"

function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default BlogLayout
