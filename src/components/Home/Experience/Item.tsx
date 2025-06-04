import Link from "next/link"
import type { Experience } from "@customTypes/home"

function ExperienceItem({ role, company, duration }: Experience) {
  return (
    <li className="grid md:grid-cols-2">
      <Link
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="row-span-2 text-lg md:text-xl text-primary font-semibold">
        {company.name}
      </Link>
      <strong
        className="md:text-lg md:text-end">
        {role}
      </strong>
      <span className="text-sm md:text-end">
        {duration}
      </span>
    </li>
  )
}

export default ExperienceItem
