"use client"

import { useEffect } from "react"

function MatrixTheme() {
  useEffect(() => {
    document.documentElement.classList.add("matrix")

    return () => {
      document.documentElement.classList.remove("matrix")
    }
  }, [])

  return null
}

export default MatrixTheme
