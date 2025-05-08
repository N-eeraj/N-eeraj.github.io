"use client"

import { use } from "react"
import { LayoutContext } from "@context/Layout"

function AuthUI() {
  const { showAuthUI } = use(LayoutContext)

  if (!showAuthUI) return

  return (
    <>
      loggedIn ? Username : Login/Sign-Up
    </>
  )
}

export default AuthUI
