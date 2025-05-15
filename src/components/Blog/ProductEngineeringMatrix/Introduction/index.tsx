import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
  paragraphs,
} = blog.introduction

function Introduction() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

      <div className="mt-2 space-y-4 text-sm sm:text-base">
        {paragraphs.map((content, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }} />
        ))}
      </div>
    </section>
  )
}

export default Introduction
