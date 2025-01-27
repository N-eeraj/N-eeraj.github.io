import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Packages/Navbar"

function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="px-3 py-4">
        {children}
      </main>
    </>
  )
}

export default layout
