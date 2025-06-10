"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
  useEffect,
} from "react"

import request from "@utils/request"
import {
  setCookie,
  resetCookie,
  getCookie,
} from "@utils/cookies"
import { AUTH_COOKIE_MAX_AGE } from "@constants/next"
import type {
  User,
  AuthContext as AuthContextType,
} from "@customTypes/auth"

const defaultContextValue: AuthContextType = {
  user: null,
  isLoggedIn: false,
  isLoadingUser: false,
  setUser: (_user: User) => {},
  clearUser: () => {},
}

export const AuthContext = createContext<AuthContextType>(defaultContextValue)

function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(defaultContextValue.user)
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  const clearUser = () => {
    setUser(null)
    resetCookie("isLoggedIn")
  }

  useEffect(() => {
    if (user) {
      setCookie({
        key: "isLoggedIn",
        value: "true",
        maxAge: AUTH_COOKIE_MAX_AGE,
      })
    }
  }, [user])

  useEffect(() => {
    const fetchUserIfLoggedIn = async () => {
      if (!getCookie("isLoggedIn")) return
      try {
        setIsLoadingUser(true)
        const { data } = await request("/api/user")
        setUser(data)
      } catch {
        clearUser()
      } finally {
        setIsLoadingUser(false)
      }
    }

    fetchUserIfLoggedIn()
  }, [])

  const contextValues = {
    user,
    isLoggedIn: Boolean(user),
    isLoadingUser,
    setUser,
    clearUser,
  } as AuthContextType

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
