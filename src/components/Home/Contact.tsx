import Link from "next/link"

function Contact() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Contact
      </h3>
      <ul className="flex justify-between">
        <li>
          <Link
            href="tel:+918157882474"
            className="text-primary">
            Phone
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/N-eeraj"
            target="_blank"
            className="text-primary">
            Github
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/n-eeraj"
            target="_blank"
            className="text-primary">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="mailto:neeraj7rajeena@gmail.com"
            target="_blank"
            className="text-primary">
            Email
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Contact
