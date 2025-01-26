import { PropsWithChildren } from "react"
import PackagesNavbar from "~/src/components/Packages/Navbar"

function layout({ children }: PropsWithChildren) {
  return (
    <>
      <PackagesNavbar />
      <main className="px-3 py-4">
        {children}
      </main>
    </>
  )
}

export default layout
