import Image from "next/image"
import blog from "@blog/product-engineering-matrix.json"
import { parseMdLinks } from "@utils/mdParser"

const {
  title,
  paragraphs: {
    thesis,
    redPill,
    bluePill,
    alternatives,
  },
} = blog.conclusion

function Conclusion() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

      <div className="mt-2 space-y-4 blog-content">
        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(thesis) }} />
        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(redPill) }} />
        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(bluePill) }} />


        <Image
          src={alternatives.image.src}
          alt={alternatives.image.alt}
          width={448}
          height={0}
          className="w-full max-w-md h-auto mx-auto my-2 sm:my-5"
          style={{ height: "auto" }} />
        <p dangerouslySetInnerHTML={{ __html: parseMdLinks(alternatives.content) }} />
      </div>
    </section>
  )
}

export default Conclusion