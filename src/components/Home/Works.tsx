import Link from "next/link"
import { WORKS } from "@constants/home"

function Works() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Works
      </h3>
      <ul className="text-primary">
        {WORKS.map(({ link, title }) => (
          <li key={link}>
            <Link
              target="_blank"
              href={link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
