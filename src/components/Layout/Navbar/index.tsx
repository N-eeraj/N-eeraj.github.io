import ThemeToggle from "@components/Theme/Toggle"
import NavbarLink from "@components/Layout/Navbar/Link"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-3 py-2 md:py-4 bg-background border-b z-10">
      <NavbarLink />
      <ThemeToggle />
    </nav>
  )
}

export default Navbar
