import type { PropsWithChildren } from "react"
import type { Viewport } from "next"

import ThemeProvider from "@components/Theme/Provider"
import { Toaster } from "@shadcn/sonner"

import METADATA from "@constants/home/metadata"

import "@styles/tailwind.css"
import "@styles/global.css"
import "@styles/variables.css"

export const metadata = METADATA

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
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
