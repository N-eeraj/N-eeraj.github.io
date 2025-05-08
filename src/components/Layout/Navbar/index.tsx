import NavbarLink from "@components/Layout/Navbar/Link"
import ThemeToggle from "@components/Theme/Toggle"
import AuthUI from "@components/Layout/Navbar/AuthUI"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-3 py-2 md:py-4 bg-background border-b z-10">
      <NavbarLink />
      <ThemeToggle />
      <AuthUI />
    </nav>
  )
}

export default Navbar
