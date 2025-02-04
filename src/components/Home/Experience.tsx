import Link from "next/link"

function Experience() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl">
        Experience
      </h3>
      <ul className="space-y-2">
        <li className="grid md:grid-cols-2">
          <strong className="row-span-2 text-lg md:text-xl">
            Frontend Developer
          </strong>
          <Link
            href="https://www.iocod.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary md:text-lg md:text-end font-semibold">
            IOCOD Infotech
          </Link>
          <span className="text-sm md:text-end">
            May 2022 - Present
          </span>
        </li>
        <li className="grid md:grid-cols-2">
          <strong className="row-span-2 text-lg md:text-xl">
            Technical Staff
          </strong>
          <Link
            href="https://www.nethram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary md:text-lg md:text-end font-semibold">
            Nethram LLC
          </Link>
          <span className="text-sm md:text-end">
            Aug 2021 - Apr 2022
          </span>
        </li>
      </ul>
    </section>
  )
}

export default Experience
