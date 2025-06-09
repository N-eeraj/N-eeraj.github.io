"use client"

import { use } from "react"
import Link from "next/link"

import Button from "@components/Base/Button"
import UserMenu from "./Menu"

import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"

function User() {
  const { showNavAuth } = use(LayoutContext)
  if (!showNavAuth) return

  const { isLoggedIn } = use(AuthContext)

  if (isLoggedIn) {
    return (
      <UserMenu />
    )
  }

  return (
    <Link
      href="/login"
      scroll={false}>
      <Button variant="ghost">
        Login
      </Button>
    </Link>
  )
}

export default User
