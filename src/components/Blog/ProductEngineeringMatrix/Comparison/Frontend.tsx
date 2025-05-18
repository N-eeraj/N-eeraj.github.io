import Image from "next/image"
import TextBlock from "@components/Blog/TextBlock"
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

      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={448}
          height={0}
          quality={100}
          className="w-full max-w-md h-auto mx-auto my-2 sm:my-5"
          style={{ height: "auto" }} />
      )}

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
    </section>
  )
}

export default Frontend
