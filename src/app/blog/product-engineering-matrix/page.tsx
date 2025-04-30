import BlogHeader from "@components/Blog/Header"
import MatrixTheme from "@components/Blog/ProductEngineeringMatrix/Matrix/Theme"
import MatrixRain from "@components/Blog/ProductEngineeringMatrix/Matrix/Rain"

import {
  METADATA,
  BLOG_TITLE,
  BLOG_COVER_IMAGE,
  BLOG_SUB_TITLE,
  BLOG_DATE,
} from "@constants/blog/productEngineeringMatrix"

import "./style.css"

export const metadata = METADATA

function BlogsHome() {
  return (
    <>
      <MatrixTheme />

      <main className="max-w-2xl mx-auto p-4 sm:py-6 sm:pb-10 overflow-y-auto">
        <BlogHeader
          title={BLOG_TITLE}
          subTitle={BLOG_SUB_TITLE}
          date={BLOG_DATE}
          readingTime={10}
          coverImage={{
            src: BLOG_COVER_IMAGE,
            alt: "Morpheus offering a red pill for Go, Vue, and Flutter; and a blue pill for Node, React, and React Native.",
          }} />
        <p>
          I know "React"
        </p>
      </main>

      <MatrixRain />
    </>
  )
}

export default BlogsHome
