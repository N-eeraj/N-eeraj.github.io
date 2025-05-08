"use client"

import {
  use,
  useEffect,
} from "react"
import { LayoutContext } from "@context/Layout"

function MatrixTheme() {
  const { setHideThemeToggle } = use(LayoutContext)

  useEffect(() => {
    setHideThemeToggle(true)
    document.documentElement.classList.add("matrix")

    return () => {
      setHideThemeToggle(false)
      document.documentElement.classList.remove("matrix")
    }
  }, [setHideThemeToggle])

  return null
}

export default MatrixTheme
