import Script from "next/script"
import { NEXT_GTAG_ID } from "@constants/enVariables"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

function GTG() {
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
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", ${NEXT_GTAG_ID});
        `}
      </Script>
    </>
  )
}

export default GTG
