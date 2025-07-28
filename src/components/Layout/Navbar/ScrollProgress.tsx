"use client"

import { use } from "react"
import { ScrollProgress } from "@magicui/scroll-progress"
import { LayoutContext } from "@context/Layout"

function NavScrollProgress() {
  const { showScrollProgress } = use(LayoutContext)
  if (!showScrollProgress) return

  return (
    <ScrollProgress className="absolute top-full from-cyan-500 via-unset to-blue-500" />
  )
}

export default NavScrollProgress
