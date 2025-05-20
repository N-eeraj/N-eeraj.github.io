import NavbarLink from "./Link"
import AuthUI from "./AuthUI"
import ThemeToggle from "@components/Theme/Toggle"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-3 py-2 sm:px-8 md:py-4 bg-background border-b z-10">
      <NavbarLink />
      <ThemeToggle />
      <AuthUI />
    </nav>
  )
}

export default Navbar
