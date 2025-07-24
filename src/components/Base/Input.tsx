"use client"

import {
  useId,
  useState,
} from "react"
import ErrorMessage from "@components/Base/ErrorMessage"
import { Input } from "@shadcn/input"
import { Label } from "@shadcn/label"
import { Button } from "@shadcn/button"
import { Icon } from "@iconify/react"
import type { InputProps } from "@customTypes/ui/input"

function BaseInput({ label, type, error, ...props }: InputProps) {
  const id = useId()
  const [showPassword, setShowPassword] = useState(false)
  const currentType = showPassword ? "text" : type

  const togglePassword = () => setShowPassword(showPassword => !showPassword)

  return (
    <div className="relative grid gap-2">
      {label && (
        <Label htmlFor={id}>
          {label}
        </Label>
      )}

      <Input
        {...props}
        id={id}
        type={currentType} />

      {type === "password" && (
        <Button
          variant="ghost"
          type="button"
          className="absolute top-5.5 right-0"
          onClick={togglePassword}>
          <Icon icon={showPassword ? "lucide:eye" : "lucide:eye-off"} />
        </Button>
      )}

      <ErrorMessage error={error} />
    </div>
  )
}

export default BaseInput
