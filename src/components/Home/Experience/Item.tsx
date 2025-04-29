import Link from "next/link"
import type { Experience } from "@customTypes/home"

function ExperienceItem({ role, company, duration }: Experience) {
  return (
    <li className="grid md:grid-cols-2">
      <strong className="row-span-2 text-lg md:text-xl">
        {role}
      </strong>
      <Link
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="text-primary md:text-lg md:text-end font-semibold">
        {company.name}
      </Link>
      <span className="text-sm md:text-end">
        {duration}
      </span>
    </li>
  )
}

export default ExperienceItem
