import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Navbar"

function NpmLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="relative max-w-[1470px] h-[calc(100vh-70px)] mx-auto pb-6 md:pb-10 overflow-y-auto">
        {children}
      </main>
    </>
  )
}

export default NpmLayout
