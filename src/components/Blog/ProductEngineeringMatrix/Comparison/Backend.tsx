import blog from "@blog/product-engineering-matrix.json"

function Backend() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.comparison.backend.title}
      </h2>
    </section>
  )
}

export default Backend
