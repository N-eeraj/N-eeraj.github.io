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

      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction.hook) }}
        className="mt-2 text-sm sm:text-base" />
      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction.react) }}
        className="mt-2 text-sm sm:text-base" />
      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction.vue) }}
        className="mt-2 text-sm sm:text-base" />

      <ul className="mt-4 space-y-3">
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
    </section>
  )
}

export default Frontend
