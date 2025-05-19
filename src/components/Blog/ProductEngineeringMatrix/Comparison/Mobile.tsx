import ComparisonBlock from "@components/Blog/ProductEngineeringMatrix/Comparison"
import TextBlock from "@components/Blog/TextBlock"
import blog from "@blog/product-engineering-matrix.json"

const {
  title,
  image,
  introduction,
  comparison,
  conclusion,
} = blog.comparison.mobile

function Mobile() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

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

export default Mobile
