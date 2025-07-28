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

function GoogleAnalyticsTag() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || typeof window.gtag !== "function") return
    window.gtag("config", NEXT_GTAG_ID || "", {
      page_path: pathname,
    })
  }, [pathname])

  if (!NEXT_GTAG_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag("js", new Date())
            gtag("config", "${NEXT_GTAG_ID}")
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalyticsTag
