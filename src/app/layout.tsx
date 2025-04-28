import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import ThemeProvider from "@components/Theme/Provider"
import { Toaster } from "@components/ui/sonner"

import "@styles/tailwind.css"
import "@styles/global.css"
import "@styles/variables.css"

export const metadata: Metadata = {
  title: "Neeraj",
  description: "My Website",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
