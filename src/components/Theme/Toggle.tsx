"use client"

import { useTheme } from "next-themes"
import { Button } from "@components/ui/button"
import { Moon, Sun } from "lucide-react"

function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme()

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <Button
      variant="outline"
      className="size-9"
      onClick={toggleTheme}>
      <Sun className="absolute hidden dark:block" />
      <Moon className="block dark:hidden" />
    </Button>
  )
}

export default ThemeToggle
