import type { PropsWithChildren } from "react"
import DefaultLayoutWrapper from "@components/Layout/DefaultWrapper"

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <DefaultLayoutWrapper>
      {children}
    </DefaultLayoutWrapper>
  )
}

export default AuthLayout
