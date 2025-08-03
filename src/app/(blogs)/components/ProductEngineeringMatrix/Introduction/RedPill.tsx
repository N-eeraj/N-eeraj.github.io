import Image from "next/image"
import TextBlock from "@blogs/components/TextBlock"
import blog from "@blogs/assets/data/product-engineering-matrix.json"

const {
  title,
  paragraphs: {
    introduction,
    platforms,
    closing,
  },
} = blog.redPill

function RedPill() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {title}
      </h2>

      <div className="mt-2 space-y-4 sm:space-y-6 blog-content">
        <TextBlock content={introduction} />

        {platforms.map(({ title, content, platform, image }) => (
          <div
            key={platform}
            className="space-y-1">
            <h3 className="blog-section-sub-title">
              {title}
            </h3>

            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                width={448}
                height={0}
                quality={100}
                className="w-full max-w-md h-auto mx-auto my-2 sm:my-5 mix-blend-lighten"
                style={{ height: "auto" }} />
            )}

            <TextBlock
              content={content}
              className="blog-section-content" />
          </div>
        ))}

        <TextBlock content={closing} />
      </div>
    </section>
  )
}

export default RedPill
