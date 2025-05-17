import TextBlock from "@components/Blog/TextBlock"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
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

      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction) }}
        className="mt-2 blog-content" />

      <ul className="mt-4 space-y-3">
        {comparison.map(({ title, content }, index) => (
          <li
            key={index}
            className="space-y-1">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>

            <TextBlock content={content} />
          </li>
        ))}
      </ul>

      {conclusion.map(({ tech, reason }) => (
        <p
          key={tech}
          dangerouslySetInnerHTML={{ __html: parseMdLinks(reason) }}
          className="mt-2 blog-content" />
      ))}
    </section>
  )
}

export default Mobile
