"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
} from "react"

const defaultContextValue = {
  hideThemeToggle: false,
  showAuthUI: false,
  setHideThemeToggle: (_arg: boolean) => {},
  setShowAuthUI: (_arg: boolean) => {},
}

export const LayoutContext = createContext(defaultContextValue)

const LayoutContextProvider = ({ children }: PropsWithChildren) => {
  const [hideThemeToggle, setHideThemeToggle] = useState(defaultContextValue.hideThemeToggle)
  const [showAuthUI, setShowAuthUI] = useState(defaultContextValue.showAuthUI)

  const contextValues: typeof defaultContextValue = {
    hideThemeToggle,
    showAuthUI,
    setHideThemeToggle,
    setShowAuthUI,
  }

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider
