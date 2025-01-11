import { PropsWithChildren } from "react"
import ThemeToggle from "@components/Theme/Toggle"

function layout({ children }: PropsWithChildren) {
  return (
    <div>
      <ThemeToggle />
      {children}
    </div>
  )
}

export default layout
