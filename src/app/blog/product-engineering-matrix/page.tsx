import Header from "@components/Blog/ProductEngineeringMatrix/Header"
import MatrixTheme from "@components/Blog/ProductEngineeringMatrix/Matrix/Theme"
import MatrixRain from "@components/Blog/ProductEngineeringMatrix/Matrix/Rain"

import METADATA from "@metadata/blog/productEngineeringMatrix"
import "./style.css"

export const metadata = METADATA

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
