import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
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
        className="mt-2 text-sm sm:text-base" />

      <ul className="my-4 space-y-3">
        {comparison.map(({ title, content }, index) => (
          <li
            key={index}
            className="space-y-0.5">
            <h3 className="text-lg sm:text-xl font-medium">
              {title}
            </h3>

            {/* single paragraph */}
            {typeof content === "string" && (
              <p
                dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
                className="text-sm leading-normal text-foreground/90" />
            )}
            {/* multi paragraph arrays */}
            {Array.isArray(content) && (
              <div className="space-y-1">
                {content.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: parseMdLinks(paragraph) }}
                    className="text-sm leading-normal text-foreground/90" />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {conclusion.map(({ tech, reason }) => (
        <p
          key={tech}
          dangerouslySetInnerHTML={{ __html: parseMdLinks(reason) }}
          className="mt-2 text-sm sm:text-base" />
      ))}
      
    </section>
  )
}

export default Backend
