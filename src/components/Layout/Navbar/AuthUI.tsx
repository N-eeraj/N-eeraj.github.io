"use client"

import { use } from "react"
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
    <>
    {user}
      Login
    </>
  )
}

export default AuthUI
