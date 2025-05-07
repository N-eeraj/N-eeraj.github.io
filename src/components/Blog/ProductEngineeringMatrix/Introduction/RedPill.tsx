import blog from "@blog/product-engineering-matrix.json"

function RedPill() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.redPill.title}
      </h2>
    </section>
  )
}

export default RedPill
