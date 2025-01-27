import ThemeToggle from "@components/Theme/Toggle"
import NavbarLink from "@components/Layout/Packages/Navbar/Link"

function PackagesNavbar() {
  return (
    <nav className="flex justify-between items-center px-3 py-2 md:py-4 border-b">
      <NavbarLink />
      <ThemeToggle />
    </nav>
  )
}

export default PackagesNavbar
