import NavbarLink from "./Link"
import User from "./User"
import ThemeToggle from "@components/Theme/Toggle"
import { ScrollProgress } from "@magicui/scroll-progress"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-3 py-2 sm:px-8 md:py-4 bg-background border-b z-10">
      <NavbarLink />
      <ThemeToggle />
      <User />
      <ScrollProgress className="absolute top-full from-cyan-500 via-unset to-blue-500" />
    </nav>
  )
}

export default Navbar
