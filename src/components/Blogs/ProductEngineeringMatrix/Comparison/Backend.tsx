import ComparisonBlock from "@components/Blogs/ProductEngineeringMatrix/Comparison"
import TextBlock from "@components/Blogs/TextBlock"
import blog from "@blogData/product-engineering-matrix.json"

const {
  title,
  image,
  introduction,
  comparison,
  conclusion,
} = blog.comparison.backend

function Backend() {
  return (
    <section>
      <h3 className="blog-sub-title">
        {title}
      </h3>

      <TextBlock
        content={introduction}
        className="mt-2 blog-content" />

      <ComparisonBlock
        image={image}
        comparison={comparison} />

      {conclusion.map(({ tech, reason }) => (
        <TextBlock
          key={tech}
          content={reason}
          className="mt-2 blog-content" />
      ))}
    </section>
  )
}

export default Backend
