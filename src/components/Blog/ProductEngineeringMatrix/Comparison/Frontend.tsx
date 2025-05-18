import ComparisonBlock from "@components/Blog/ProductEngineeringMatrix/Comparison"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

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
        <p
          key={key}
          dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
          className="mt-2 blog-content" />
      ))}

      <ComparisonBlock
        image={image}
        comparison={comparison} />
    </section>
  )
}

export default Frontend
