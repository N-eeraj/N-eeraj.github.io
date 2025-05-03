import Header from "@components/Blog/ProductEngineeringMatrix/Header"
import MatrixTheme from "@components/Blog/ProductEngineeringMatrix/Matrix/Theme"
import MatrixRain from "@components/Blog/ProductEngineeringMatrix/Matrix/Rain"

import blog from "@blog/product-engineering-matrix.json"
import keywords from "@keywords/blog/product-engineering-matrix.json"
import { generateBlogMetadata } from "@utils/metadata"

import "./style.css"

export const metadata = generateBlogMetadata(blog, keywords)

function BlogsHome() {
  return (
    <>
      <MatrixTheme />
      <MatrixRain />

      <main className="max-w-2xl mx-auto p-4 sm:py-6 sm:pb-10 overflow-y-auto">
        <Header />
      </main>
    </>
  )
}

export default BlogsHome
