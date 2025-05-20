import Image from "next/image"
import TextBlock from "@components/Blog/TextBlock"
import blog from "@blogData/product-engineering-matrix.json"

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
        <TextBlock content={introduction} />

        {platforms.map(({ title, content, platform }) => (
          <div
            key={platform}
            className="space-y-1">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>
            <TextBlock
              content={content}
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

        <TextBlock content={ecoSystem} />
      </div>
    </section>
  )
}

export default BluePill
