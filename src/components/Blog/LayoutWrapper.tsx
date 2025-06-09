"use client"

import {
  use,
  useEffect,
  type PropsWithChildren,
} from "react"
import { LayoutContext } from "@context/Layout"

function BlogLayoutWrapper({ children }: PropsWithChildren) {
  const { setShowNavAuth } = use(LayoutContext)

useEffect(() => {
  setShowNavAuth(true)

  return () => {
    setShowNavAuth(false)
  }
}, [setShowNavAuth])

  return (
    <>
      {children}
    </>
  )
}

export default BlogLayoutWrapper
