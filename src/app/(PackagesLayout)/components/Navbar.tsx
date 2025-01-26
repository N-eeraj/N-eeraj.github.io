import Link from "next/link"
import ThemeToggle from "@components/Theme/Toggle"

function PackagesNavbar() {
  return (
    <nav className="flex justify-between items-center px-3 py-2 md:py-4 border-b">
      <h1>
        <Link
          href="/"
          className="text-3xl font-semibold">
          Neeraj
        </Link>
      </h1>
      <ThemeToggle />
    </nav>
  )
}

export default PackagesNavbar
