import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Packages/Navbar"

function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="max-w-[1470px] mx-auto">
        {children}
      </main>
    </>
  )
}

export default layout
