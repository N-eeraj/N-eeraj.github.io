import blog from "@blog/product-engineering-matrix.json"

function Mobile() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.comparison.mobile.title}
      </h2>
    </section>
  )
}

export default Mobile
