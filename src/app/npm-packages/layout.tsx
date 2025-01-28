import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Packages/Navbar"

function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="max-w-[1470px] mx-auto pb-6 md:pb-10">
        {children}
      </main>
    </>
  )
}

export default layout
