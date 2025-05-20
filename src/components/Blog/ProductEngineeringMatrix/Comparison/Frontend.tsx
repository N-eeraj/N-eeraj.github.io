import ComparisonBlock from "@components/Blog/ProductEngineeringMatrix/Comparison"
import TextBlock from "@components/Blog/TextBlock"
import blog from "@blogData/product-engineering-matrix.json"

const {
  title,
  image,
  introduction,
  comparison,
} = blog.comparison.frontend

function Frontend() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

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
