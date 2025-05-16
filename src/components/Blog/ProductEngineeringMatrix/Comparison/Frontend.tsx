import TextBlock from "@components/Blog/TextBlock"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
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

      <ul className="mt-4 space-y-3">
        {comparison.map(({ title, content }, index) => (
          <li
            key={index}
            className="space-y-0.5">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>

            <TextBlock content={content} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Frontend
