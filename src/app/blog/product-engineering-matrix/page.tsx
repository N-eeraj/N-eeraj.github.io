import { Metadata } from "next"
import MatrixTheme from "./components/Matrix/Theme"
import MatrixRain from "./components/Matrix/Rain"
import "@styles/blog/product-engineering-matrix.css"

export const metadata: Metadata = {
  title: "The Product Engineering Matrix | Blogs",
  description: "Comparing two modern powerful full-stack ecosystems: Go + Nuxt + Flutter vs Node + Next + React Native, exploring their strengths, trade-offs, and use cases.",
}

function BlogsHome() {
  return (
    <main className="max-w-3xl mx-auto p-4 md:py-6 md:pb-10 overflow-y-auto">
      <MatrixTheme />
      <MatrixRain />
      <h1 className="text-primary text-3xl">
        The Product Engineering Matrix
      </h1>
      <span>
        I know "React"
      </span>
    </main>
  )
}

export default BlogsHome
