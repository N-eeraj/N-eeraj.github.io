import BlogHeader from "@blogs/components/Header"
import blog from "@blogs/assets/data/product-engineering-matrix.json"
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
