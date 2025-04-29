import { Metadata } from "next"

import BlogHeader from "@components/Blog/Header"
import MatrixTheme from "./components/Matrix/Theme"
import MatrixRain from "./components/Matrix/Rain"

import "@styles/blog/product-engineering-matrix.css"

const BLOG_TITLE = "The Product Engineering Matrix"

export const metadata: Metadata = {
  title: `${BLOG_TITLE} | Blogs`,
  description: "Comparing two modern powerful full-stack ecosystems: Go + Nuxt + Flutter vs Node + Next + React Native, exploring their strengths, trade-offs, and use cases.",
}

function BlogsHome() {
  return (
    <>
      <MatrixTheme />

      <main className="max-w-2xl mx-auto p-4 sm:py-6 sm:pb-10 overflow-y-auto">
        <BlogHeader
          title={BLOG_TITLE}
          subTitle="Comparing modern stacks: Go/Nuxt/Flutter vs Node/Next/React Native."
          date="2025-04-29"
          readingTimeInMinutes={10}
          coverImage={{
            src: "/blog/product-engineering-matrix/cover.webp",
            alt: "Morpheus offering a red pill for Go, Nuxt, and Flutter; and a blue pill for Node, Next, and React Native.",
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
