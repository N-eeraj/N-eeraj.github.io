import Link from "next/link"
import { NAME } from "@constants/enVariables"

function Header() {
  return (
    <header className="space-y-2">
      <h2 className="flex flex-wrap text-3xl md:text-4xl">
        <span className="whitespace-nowrap">
          Hello, I'm {NAME},&nbsp;
        </span>
        <span className="">
          a developer based in India.
        </span>
      </h2>

      <p>
        I work at&nbsp;
        <Link
          href="https://www.iocod.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary">
          IOCOD Infotech
        </Link>
        &nbsp;as a frontend developer specializing in Vue & Nuxt.
      </p>
    </header>
  )
}

export default Header
