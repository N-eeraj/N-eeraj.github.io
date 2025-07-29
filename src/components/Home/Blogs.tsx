import Link from "next/link"

function Blogs() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Blogs
      </h3>
      <ul className="text-primary">
        <li>
          <Link href="/blogs/product-engineering-matrix">
            The Product Engineering Matrix
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Blogs
