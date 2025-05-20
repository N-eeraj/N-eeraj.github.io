import TextBlock from "@components/Blog/TextBlock"
import blog from "@blogData/product-engineering-matrix.json"

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

      <div className="mt-2 space-y-4 blog-content">
        {paragraphs.map((content, index) => (
          <TextBlock
            key={index}
            content={content} />
        ))}
      </div>
    </section>
  )
}

export default Introduction
