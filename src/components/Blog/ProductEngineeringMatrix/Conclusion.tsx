import blog from "@blog/product-engineering-matrix.json"

function Conclusion() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.conclusion.title}
      </h2>
    </section>
  )
}

export default Conclusion