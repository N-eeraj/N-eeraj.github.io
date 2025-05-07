import blog from "@blog/product-engineering-matrix.json"

function Feedback() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.feedback.title}
      </h2>
    </section>
  )
}

export default Feedback