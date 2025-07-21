"use client"

import {
  use,
  useEffect,
  type PropsWithChildren,
} from "react"
import { queryClient } from "@components/QueryProvider"
import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"

function BlogLayoutWrapper({ children }: PropsWithChildren) {
  const { setShowNavAuth } = use(LayoutContext)
  const {
    isLoggedIn,
    isLoadingUser,
  } = use(AuthContext)

  useEffect(() => {
    setShowNavAuth(true)

    return () => {
      setShowNavAuth(false)
    }
  }, [setShowNavAuth])

  useEffect(() => {
    if (isLoadingUser) return
    queryClient.invalidateQueries({
      queryKey: ["blog"]
    })
  }, [
    isLoggedIn,
    isLoadingUser,
  ])

  return (
    children
  )
}

export default BlogLayoutWrapper
