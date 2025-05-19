import Image from "next/image"
import TextBlock from "@components/Blog/TextBlock"
import blog from "@blog/product-engineering-matrix.json"

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
        <TextBlock content={thesis}/>
        <TextBlock content={redPill}/>
        <TextBlock content={bluePill}/>


        <Image
          src={alternatives.image.src}
          alt={alternatives.image.alt}
          width={448}
          height={0}
          className="w-full max-w-md h-auto mx-auto my-2 sm:my-5"
          style={{ height: "auto" }} />
        <TextBlock content={alternatives.content}/>
      </div>
    </section>
  )
}

export default Conclusion