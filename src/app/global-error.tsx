"use client"

import { ErrorBoundaryType } from "@customTypes/error"

export default function GlobalErrorBoundary({ error }: ErrorBoundaryType) {
  console.error(error)

  return (
    <html>
      <body>
        <h1>
          Oops! Something went wrong
        </h1>
      </body>
    </html>
  )
}
