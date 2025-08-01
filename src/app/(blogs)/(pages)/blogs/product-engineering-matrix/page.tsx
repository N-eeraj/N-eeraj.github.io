import {
  MatrixTheme,
  MatrixRain,
  Header,
  Introduction,
  BluePill,
  RedPill,
  Backend,
  Frontend,
  Mobile,
  Conclusion,
  Feedback,
} from "@blogs/components/ProductEngineeringMatrix"

import blog from "@blogs/assets/data/product-engineering-matrix.json"
import keywords from "@blogs/assets/data/keywords/product-engineering-matrix.json"
import { generateBlogMetadata } from "@utils/metadata"

import "@blogs/styles/product-engineering-matrix.css"

export const metadata = generateBlogMetadata(blog, keywords)

function BlogsHome() {
  return (
    <>
      <MatrixTheme />
      <MatrixRain />

      <main className="max-w-2xl mx-auto p-4 sm:pt-6 sm:pb-10 md:pb-12 overflow-y-auto">
        <Header />

        <article className="space-y-8 sm:space-y-10">
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
