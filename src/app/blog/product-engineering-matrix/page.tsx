import MatrixTheme from "@components/Blog/ProductEngineeringMatrix/Matrix/Theme"
import MatrixRain from "@components/Blog/ProductEngineeringMatrix/Matrix/Rain"

import Header from "@components/Blog/ProductEngineeringMatrix/Header"
import Introduction from "@components/Blog/ProductEngineeringMatrix/Introduction"
import BluePill from "@components/Blog/ProductEngineeringMatrix/Introduction/BluePill"
import RedPill from "@components/Blog/ProductEngineeringMatrix/Introduction/RedPill"
import Backend from "@components/Blog/ProductEngineeringMatrix/Comparison/Backend"
import Frontend from "@components/Blog/ProductEngineeringMatrix/Comparison/Frontend"
import Mobile from "@components/Blog/ProductEngineeringMatrix/Comparison/Mobile"
import Conclusion from "@components/Blog/ProductEngineeringMatrix/Conclusion"
import Feedback from "@components/Blog/ProductEngineeringMatrix/Feedback"

import blog from "@blog/product-engineering-matrix.json"
import keywords from "@keywords/blog/product-engineering-matrix.json"
import { generateBlogMetadata } from "@utils/metadata"

import "@styles/blog/product-engineering-matrix.css"

export const metadata = generateBlogMetadata(blog, keywords)

function BlogsHome() {
  return (
    <>
      <MatrixTheme />
      <MatrixRain />

      <main className="max-w-2xl mx-auto p-4 sm:py-6 sm:pb-10 overflow-y-auto">
        <Header />

        <article className="space-y-7">
          <Introduction />
          <BluePill />
          <RedPill />

          <Backend />
          <Frontend />
          <Mobile />

          <Conclusion />
          <Feedback />
        </article>
      </main>
    </>
  )
}

export default BlogsHome
