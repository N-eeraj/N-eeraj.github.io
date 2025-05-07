import blog from "@blog/product-engineering-matrix.json"

function BluePill() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.bluePill.title}
      </h2>
    </section>
  )
}

export default BluePill
