import type { PropsWithChildren } from "react"
import type { Viewport } from "next"

import ThemeProvider from "@components/Theme/Provider"
import LayoutContextProvider from "@context/Layout"
import AuthContextProvider from "@context/Auth"
import { Toaster } from "@shadcn/sonner"

import METADATA from "@metadata/global"

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
      <link
        type="image/x-icon"
        rel="icon"
        href="/favicon.svg" />

      <body>
        <ThemeProvider>
          <AuthContextProvider>
            <LayoutContextProvider>
              {children}
            </LayoutContextProvider>
          </AuthContextProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
