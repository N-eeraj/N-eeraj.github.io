import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Packages/Navbar"

function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
