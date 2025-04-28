import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import ThemeProvider from "@components/Theme/Provider"
import { Toaster } from "@components/ui/sonner"

import "@/tailwind.css"
import "@/style.css"
import "@/variables.css"

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
