import NavbarLink from "./Link"
import User from "./User"
import ThemeToggle from "@components/Theme/Toggle"
import NavScrollProgress from "./ScrollProgress"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-3 py-2 sm:px-8 md:py-4 bg-background border-b z-10">
      <NavbarLink />
      <ThemeToggle />
      <User />
      <NavScrollProgress />
    </nav>
  )
}

export default Navbar
