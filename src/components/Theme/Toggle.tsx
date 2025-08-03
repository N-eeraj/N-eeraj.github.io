"use client"

import { use } from "react"
import { useTheme } from "next-themes"

import { Button } from "@shadcn/button"
import { LayoutContext } from "@contexts/Layout"
import {
  Sun,
  Moon,
} from "lucide-react"

function ThemeToggle() {
  const { hideThemeToggle } = use(LayoutContext)

  const {
    theme,
    setTheme,
  } = useTheme()

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  if (hideThemeToggle) return

  return (
    <Button
      variant="outline"
      className="size-9"
      aria-label="theme-toggle-button"
      onClick={toggleTheme}>
      <Sun className="absolute hidden dark:block" />
      <Moon className="block dark:hidden" />
    </Button>
  )
}

export default ThemeToggle
