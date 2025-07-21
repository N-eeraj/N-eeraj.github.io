"use client"

import { use } from "react"
import Link from "next/link"

import Button from "@components/Base/Button"
import UserMenu from "./Menu"

import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"
import { usePathname } from "next/navigation"

function User() {
  const {
    showNavAuth,
    redirectOnLogin,
  } = use(LayoutContext)
  if (!showNavAuth) return

  const { isLoggedIn } = use(AuthContext)

  if (isLoggedIn) {
    return (
      <UserMenu />
    )
  }

  const pathname = usePathname()
  const loginPath = `/login${redirectOnLogin ? `?redirect-to=${pathname}` : ""}`

  return (
    <Link
      href={loginPath}
      scroll={false}>
      <Button variant="ghost">
        Login
      </Button>
    </Link>
  )
}

export default User
