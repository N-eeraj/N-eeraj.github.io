import type { PropsWithChildren, ReactNode } from "react"
import type { Viewport } from "next"

import ThemeProvider from "@components/Theme/Provider"
import QueryProvider from "@components/QueryProvider"
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

export default function RootLayout({ children, modal }: PropsWithChildren & { modal?: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <link
        type="image/x-icon"
        rel="icon"
        href="/favicon.svg" />

      <body>
        <QueryProvider>
          <ThemeProvider>
            <AuthContextProvider>
              <LayoutContextProvider>
                {children}
              </LayoutContextProvider>
              {modal}
            </AuthContextProvider>
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
