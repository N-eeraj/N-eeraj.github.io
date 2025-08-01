import { PropsWithChildren } from "react"
import Navbar from "@components/Layout/Navbar"

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DefaultLayout
