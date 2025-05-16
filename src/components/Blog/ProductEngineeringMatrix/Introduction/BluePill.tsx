import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
  paragraphs: {
    introduction,
    platforms,
    ecoSystem,
  },
} = blog.bluePill

function BluePill() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

      <div className="mt-2 space-y-4 blog-content">
        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(introduction) }} />

        {platforms.map(({ title, content, platform }) => (
          <div
            key={platform}
            className="space-y-0.5">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
              className="blog-section-content" />
          </div>
        ))}

        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(ecoSystem) }} />
      </div>
    </section>
  )
}

export default BluePill
