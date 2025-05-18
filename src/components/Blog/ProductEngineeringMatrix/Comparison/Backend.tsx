import ComparisonBlock from "@components/Blog/ProductEngineeringMatrix/Comparison"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

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
      <h2 className="blog-sub-title">
        {title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction) }}
        className="mt-2 blog-content" />

      <ComparisonBlock
        image={image}
        comparison={comparison} />

      {conclusion.map(({ tech, reason }) => (
        <p
          key={tech}
          dangerouslySetInnerHTML={{ __html: parseMdLinks(reason) }}
          className="mt-2 blog-content" />
      ))}
    </section>
  )
}

export default Backend
