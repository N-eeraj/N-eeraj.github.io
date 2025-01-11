"use client"

import { startTransition } from "react"
import { useRouter } from "next/navigation"

interface ErrorBoundaryType {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorBoundaryType) {
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
      <button onClick={handleReset}>
        Try again
      </button>
    </main>
  )
}