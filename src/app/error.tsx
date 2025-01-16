"use client"

import { startTransition } from "react"
import { useRouter } from "next/navigation"

import { ErrorBoundaryType } from "@customTypes/error"

export default function RootErrorBoundary({ error, reset }: ErrorBoundaryType) {
  const router = useRouter()

  const handleReset = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  console.error(error)

  return (
    <main>
      <h1>
        Oops! Something went wrong here
      </h1>
      {error.message && (
        <p>
          {error.message}
        </p>
      )}
      <button onClick={handleReset}>
        Try again
      </button>
    </main>
  )
}
