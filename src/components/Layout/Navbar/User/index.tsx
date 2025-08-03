"use client"

import { use } from "react"
import Link from "next/link"

import Button from "@components/Base/Button"
import UserMenu from "./Menu"

import { LayoutContext } from "@contexts/Layout"
import { UserContext } from "@contexts/User"
import { usePathname } from "next/navigation"

function User() {
  const pathname = usePathname()

  const {
    showNavAuth,
    redirectOnLogin,
  } = use(LayoutContext)
  if (!showNavAuth) return

  const { isLoggedIn } = use(UserContext)

  if (isLoggedIn) {
    return (
      <UserMenu />
    )
  }

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
