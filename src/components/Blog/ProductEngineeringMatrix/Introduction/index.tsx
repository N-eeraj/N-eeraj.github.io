import blog from "@blog/product-engineering-matrix.json"

function Introduction() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.introduction.title}
      </h2>
      <div className="mt-2 space-y-4 text-sm sm:text-base">
        <p>
          {blog.introduction.paragraphs.lead}
        </p>
        <p>
          {blog.introduction.paragraphs.bluePill}
        </p>
        <p>
          {blog.introduction.paragraphs.redPill}
        </p>
        <p>
          {blog.introduction.paragraphs.thesis}
        </p>
      </div>
    </section>
  )
}

export default Introduction
