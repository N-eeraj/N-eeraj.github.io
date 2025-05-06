import blog from "@blog/product-engineering-matrix.json"

function Introduction() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold">
        {blog.introduction.title}
      </h2>
      <p className="mt-2 text-sm sm:text-base">
        {blog.introduction.paragraphs.lead}
      </p>
      <p className="mt-4 text-sm sm:text-base">
        {blog.introduction.paragraphs.bluePill}
      </p>
      <p className="mt-4 text-sm sm:text-base">
        {blog.introduction.paragraphs.redPill}
      </p>
      <p className="mt-4 text-sm sm:text-base">
        {blog.introduction.paragraphs.thesis}
      </p>
    </section>
  )
}

export default Introduction
