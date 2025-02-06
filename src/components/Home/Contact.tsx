import Link from "next/link"
import { CONTACTS } from "@constants/home"

function Contact() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Contact
      </h3>
      <ul className="flex justify-between">
        {CONTACTS.map(({ label, link }) => (
          <li key={label}>
            <Link
              href={link}
              target="_blank"
              className="text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
