import Link from "next/link"
import { NAME } from "@constants/enVariables"

function Header() {
  return (
    <header className="space-y-2">
      <h1 className="flex flex-wrap text-3xl md:text-4xl">
        <span className="whitespace-nowrap">
          Hello, I'm {NAME},&nbsp;
        </span>
        <span className="">
          a developer based in India.
        </span>
      </h1>

      <p className="flex flex-wrap">
        I work at&nbsp;
        <Link
          href="https://www.iocod.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary whitespace-nowrap">
          IOCOD Infotech&nbsp;
        </Link>
        as a&nbsp;
        <span className="whitespace-nowrap">
          Software Developer,&nbsp;
        </span>
        specializing in&nbsp;
        <span className="whitespace-nowrap">
          Frontend Technologies.
        </span>
      </p>
    </header>
  )
}

export default Header
