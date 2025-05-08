"use client"

import {
  useState,
  createContext,
  type PropsWithChildren,
} from "react"

const defaultContextValue = {
  hideThemeToggle: false,
  setHideThemeToggle: (_arg: boolean) => {}
}

export const LayoutContext = createContext(defaultContextValue)

const LayoutContextProvider = ({ children }: PropsWithChildren) => {
  const [hideThemeToggle, setHideThemeToggle] = useState(defaultContextValue.hideThemeToggle)

  const contextValues: typeof defaultContextValue = {
    hideThemeToggle,
    setHideThemeToggle,
  }

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider
