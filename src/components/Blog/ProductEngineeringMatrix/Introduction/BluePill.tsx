import Image from "next/image"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
  paragraphs: {
    introduction,
    platforms,
    ecoSystem,
  },
  image,
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
            className="space-y-1">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
              className="blog-section-content" />
          </div>
        ))}

        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={0}
          className="w-full h-auto my-6 sm:my-8"
          style={{ height: "auto" }} />

        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(ecoSystem) }} />
      </div>
    </section>
  )
}

export default BluePill
