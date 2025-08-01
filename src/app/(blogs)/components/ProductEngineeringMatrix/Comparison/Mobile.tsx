import ComparisonBlock from "@blogs/components/ProductEngineeringMatrix/Comparison"
import TextBlock from "@blogs/components/TextBlock"
import blog from "@blogs/assets/data/product-engineering-matrix.json"

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

export default Mobile
