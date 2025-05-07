import blog from "@blog/product-engineering-matrix.json"

function Frontend() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.comparison.frontend.title}
      </h2>
    </section>
  )
}

export default Frontend
