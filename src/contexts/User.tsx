"use client"

import {
  useState,
  createContext,
  useEffect,
  type PropsWithChildren,
} from "react"

import request from "@utils/request"
import {
  setCookie,
  resetCookie,
  getCookie,
} from "@utils/cookies"
import { AUTH_COOKIE_MAX_AGE } from "@constants/time"
import type { UserContext as UserContextType } from "@customTypes/user"
import type { User } from "@customTypes/user"


const defaultContextValue: UserContextType = {
  user: null,
  isLoggedIn: false,
  isLoadingUser: false,
  setUser: (_user: User) => {},
  clearUser: () => {},
}

export const UserContext = createContext<UserContextType>(defaultContextValue)

function UserContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(defaultContextValue.user)
  const [isLoadingUser, setIsLoadingUser] = useState(true)

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
      if (!getCookie("isLoggedIn")) {
        setIsLoadingUser(false)
        return
      }
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
  } as UserContextType

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
