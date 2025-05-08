"use client"

import {
  use,
  useEffect,
  type PropsWithChildren,
} from "react"
import { LayoutContext } from "@context/Layout"

function BlogLayoutWrapper({ children }: PropsWithChildren) {
  const { setShowAuthUI } = use(LayoutContext)

useEffect(() => {
  setShowAuthUI(true)

  return () => {
    setShowAuthUI(false)
  }
}, [setShowAuthUI])

  return (
    <>
      {children}
    </>
  )
}

export default BlogLayoutWrapper
