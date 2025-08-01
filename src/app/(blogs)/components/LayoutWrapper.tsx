"use client"

import {
  use,
  useEffect,
  type PropsWithChildren,
} from "react"
import { queryClient } from "@components/QueryProvider"
import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"
import { BLOG_QUERY_KEY } from "@blogs/constants/"

function BlogLayoutWrapper({ children }: PropsWithChildren) {
  const {
    setShowNavAuth,
    setRedirectOnLogin,
    setShowScrollProgress,
  } = use(LayoutContext)
  const {
    isLoggedIn,
    isLoadingUser,
  } = use(AuthContext)

  useEffect(() => {
    setShowNavAuth(true)
    setRedirectOnLogin(true)
    setShowScrollProgress(true)

    return () => {
      setShowNavAuth(false)
      setRedirectOnLogin(false)
      setShowScrollProgress(false)
    }
  }, [
    setShowNavAuth,
    setRedirectOnLogin,
    setShowScrollProgress,
  ])

  useEffect(() => {
    if (isLoadingUser) return
    queryClient.invalidateQueries({
      queryKey: [BLOG_QUERY_KEY]
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
