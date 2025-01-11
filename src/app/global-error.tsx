"use client"

interface ErrorBoundaryType {
  error: Error
  reset: () => void
}

export default function GlobalError({ error }: ErrorBoundaryType) {
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