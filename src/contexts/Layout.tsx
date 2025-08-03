"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
} from "react"

const defaultContextValue = {
  hideThemeToggle: false,
  showNavAuth: false,
  redirectOnLogin: false,
  showScrollProgress: false,
  setHideThemeToggle: (_arg: boolean) => {},
  setShowNavAuth: (_arg: boolean) => {},
  setRedirectOnLogin: (_arg: boolean) => {},
  setShowScrollProgress: (_arg: boolean) => {},
}

export const LayoutContext = createContext(defaultContextValue)

const LayoutContextProvider = ({ children }: PropsWithChildren) => {
  const [hideThemeToggle, setHideThemeToggle] = useState(defaultContextValue.hideThemeToggle)
  const [showNavAuth, setShowNavAuth] = useState(defaultContextValue.showNavAuth)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)
  const [showScrollProgress, setShowScrollProgress] = useState(false)

  const contextValues: typeof defaultContextValue = {
    hideThemeToggle,
    showNavAuth,
    redirectOnLogin,
    showScrollProgress,
    setHideThemeToggle,
    setShowNavAuth,
    setRedirectOnLogin,
    setShowScrollProgress,
  }

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider
