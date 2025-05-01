import BlogHeader from "@components/Blog/Header"
import blog from "@blog/product-engineering-matrix.json"
import type { DateYMD } from "@customTypes/utils"

function Header() {
  return (
    <BlogHeader
      title={blog.title}
      subTitle={blog.subTitle}
      date={blog.date as DateYMD}
      readingTime={10}
      coverImage={blog.coverImage} />
  )
}

export default Header
