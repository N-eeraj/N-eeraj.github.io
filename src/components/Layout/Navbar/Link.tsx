import Link from "next/link"
import { Geist } from "next/font/google"
import clsx from "clsx"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

function NavbarLink() {
  return (
    <Link
      href="/"
      className="group relative text-3xl font-semibold tracking-wide">
      <h2 className={geist.className}>
        <span className={clsx(
          "relative group-hover:pr-4 duration-500",
          "after:absolute after:top-1/2 after:right-0 after:w-3 after:h-1 after:mx-0.5 after:bg-primary after:rounded-full after:scale-x-0 after:origin-right after:duration-500",
          "group-hover:after:scale-x-100",
        )}>
          N
        </span>
        eeraj
      </h2>
    </Link>
  )
}

export default NavbarLink
