"use client"

import {
  use,
  useState,
} from "react"
import Link from "next/link"

import Button from "@components/Base/Button"
import { LayoutContext } from "@context/Layout"
import { AuthContext } from "@context/Auth"
import request from "@utils/request"

function AuthUI() {
  const { showAuthUI } = use(LayoutContext)
  if (!showAuthUI) return

  const [loggingOut, setLoggingOut] = useState(false)

  const {
    user,
    isLoggedIn,
    clearUser,
  } = use(AuthContext)

  const logoutUser = async () => {
    try {
      setLoggingOut(true)
      await request("/api/logout", {
        method: "POST",
      })
      clearUser()
    } catch (error: any) {
      // handle error
    } finally {
      setLoggingOut(false)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-x-2">
        <span>
          {user.name}
        </span>
        <Button
          variant="ghost"
          loading={loggingOut}
          onClick={logoutUser}>
          Logout
        </Button>
      </div>
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

export default AuthUI
