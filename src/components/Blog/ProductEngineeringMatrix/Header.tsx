import BlogHeader from "@components/Blog/Header"
import blog from "@blogData/product-engineering-matrix.json"
import type { DateYMD } from "@customTypes/utils"

function Header() {
  return (
    <BlogHeader
      title={blog.title}
      subTitle={blog.subTitle}
      date={blog.date as DateYMD}
      readingTime={blog.readingTime}
      coverImage={blog.coverImage} />
  )
}

export default Header
