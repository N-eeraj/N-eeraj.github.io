import Link from "next/link"
import clsx from "clsx"

function NavbarLink() {
  return (
    <Link
      href="/"
      className={clsx(
        "group relative text-3xl font-semibold tracking-wide",
        "after:absolute after:-bottom-0 after:left-0 after:w-11/12 after:h-1 after:bg-foreground after:rounded-l-full after:duration-300 after:scale-x-0 after:origin-right",
        "hover:after:scale-100 hover:after:duration-500",
      )}>
      <h1>
        <span className={clsx(
          "relative group-hover:pr-4 duration-500",
          "after:absolute after:top-1/2 after:right-0 after:w-3 after:h-1 after:mx-0.5 after:bg-primary after:rounded-full after:scale-x-0 after:origin-right after:duration-500",
          "group-hover:after:scale-x-100",
        )}>
          N
        </span>
        eeraj
      </h1>
    </Link>
  )
}

export default NavbarLink
