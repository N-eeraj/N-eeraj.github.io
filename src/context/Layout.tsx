"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
} from "react"

const defaultContextValue = {
  hideThemeToggle: false,
  showNavAuth: false,
  setHideThemeToggle: (_arg: boolean) => {},
  setShowNavAuth: (_arg: boolean) => {},
}

export const LayoutContext = createContext(defaultContextValue)

const LayoutContextProvider = ({ children }: PropsWithChildren) => {
  const [hideThemeToggle, setHideThemeToggle] = useState(defaultContextValue.hideThemeToggle)
  const [showNavAuth, setShowNavAuth] = useState(defaultContextValue.showNavAuth)

  const contextValues: typeof defaultContextValue = {
    hideThemeToggle,
    showNavAuth,
    setHideThemeToggle,
    setShowNavAuth,
  }

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider
