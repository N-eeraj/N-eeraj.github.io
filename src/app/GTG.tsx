"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { NEXT_GTAG_ID } from "@constants/enVariables"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

function GTG() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", NEXT_GTAG_ID, {
        page_path: pathname,
        user_id: "USER_ID_HERE",
      })
    }
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag(){dataLayer.push(arguments)}
          gtag("js", new Date())
        `}
      </Script>
    </>
  )
}

export default GTG
