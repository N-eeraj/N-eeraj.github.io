import { Poll } from "@components/Blog/ProductEngineeringMatrix/Feedback"
import blog from "@blogData/product-engineering-matrix.json"

function Feedback() {
  return (
    <section className="space-y-2">
      <h2 className="blog-sub-title">
        {blog.feedback.title}
      </h2>

      <Poll />
    </section>
  )
}

export default Feedback
