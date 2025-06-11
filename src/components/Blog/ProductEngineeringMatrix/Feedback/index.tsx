import { Suspense } from "react"
import Fallback from "./Fallback"
import Poll from "./Poll"
import blog from "@blogData/product-engineering-matrix.json"

function Feedback() {
  return (
    <section>
      <h2 className="blog-sub-title">
        {blog.feedback.title}
      </h2>

      <Suspense fallback={<Fallback />}>
        <Poll />
      </Suspense>
    </section>
  )
}

export default Feedback
