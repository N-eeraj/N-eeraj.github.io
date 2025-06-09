"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
  useEffect,
} from "react"

import type {
  User,
  AuthContext as AuthContextType,
} from "@customTypes/auth"

const defaultContextValue: AuthContextType = {
  user: null,
  isLoggedIn: false,
  setUser: (_user: User) => {},
  clearUser: () => {},
}

export const AuthContext = createContext<AuthContextType>(defaultContextValue)

function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(defaultContextValue.user)

  useEffect(() => {
    if (user) {
      console.log("setting user")
    } else {
      console.log("unsetting user")
    }
  }, [user])

  const contextValues = {
    user,
    isLoggedIn: Boolean(user),
    setUser,
    clearUser: () => setUser(null),
  } as AuthContextType

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
