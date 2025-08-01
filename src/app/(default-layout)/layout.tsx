import type { PropsWithChildren } from "react"
import DefaultLayoutWrapper from "@components/Layout/DefaultWrapper"

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <DefaultLayoutWrapper>
      {children}
    </DefaultLayoutWrapper>
  )
}

export default DefaultLayout
