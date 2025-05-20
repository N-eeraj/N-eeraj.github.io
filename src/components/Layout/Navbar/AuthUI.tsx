"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@shadcn/button"

import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"

function AuthUI() {
  const { showAuthUI } = use(LayoutContext)

  if (!showAuthUI) return

  const {
    user,
    isLoggedIn
  } = use(AuthContext)

  if (isLoggedIn) {
    return (
      <>
        {user.name}
      </>
    )
  }

  return (
    <Link href="/login">
      <Button variant="ghost">
        Login
      </Button>
    </Link>
  )
}

export default AuthUI
