import { Metadata } from "next"
import MatrixTheme from "./components/MatrixTheme"
import "@styles/blog/product-engineering-matrix.css"

export const metadata: Metadata = {
  title: "The Product Engineering Matrix | Blogs",
  description: "Comparing two modern powerful full-stack ecosystems: Go + Nuxt + Flutter vs Node + Next + React Native, exploring their strengths, trade-offs, and use cases.",
}

function BlogsHome() {
  return (
    <>
      <MatrixTheme />
      <h1 className="text-primary text-3xl">
        The Product Engineering Matrix
      </h1>
      <span>
        I know "React"
      </span>
    </>
  )
}

export default BlogsHome
