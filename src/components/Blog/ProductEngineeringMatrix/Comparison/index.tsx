import Image from "next/image"
import TextBlock from "@components/Blog/TextBlock"
import type { ComparisonBlockProps } from "@customTypes/blog/productEngineeringMatrix"

function ComparisonBlock({ image, comparison }: ComparisonBlockProps) {
  return (
    <>
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

      <ul className="my-4 space-y-3">
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
    </>
  )
}

export default ComparisonBlock
