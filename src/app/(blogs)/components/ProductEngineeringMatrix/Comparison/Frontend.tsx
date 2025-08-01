import ComparisonBlock from "@blogs/components/ProductEngineeringMatrix/Comparison"
import TextBlock from "@blogs/components/TextBlock"
import blog from "@blogs/assets/data/product-engineering-matrix.json"

const {
  title,
  image,
  introduction,
  comparison,
} = blog.comparison.frontend

function Frontend() {
  return (
    <section>
      <h3 className="blog-sub-title">
        {title}
      </h3>

      {Object.entries(introduction).map(([key, content]) => (
        <TextBlock
          key={key}
          content={content}
          className="mt-2 blog-content" />
      ))}

      <ComparisonBlock
        image={image}
        comparison={comparison} />
    </section>
  )
}

export default Frontend
