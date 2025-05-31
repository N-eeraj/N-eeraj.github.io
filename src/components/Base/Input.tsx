"use client"

import {
  useId,
} from "react"
import { Input } from "@shadcn/input"
import { Label } from "@shadcn/label"
import type { InputProps } from "@customTypes/ui/input"

function BaseInput({ label, error, ...props }: InputProps) {
  const id = useId()

  return (
    <div className="grid gap-2">
      {label && (
        <Label htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        id={id}
        {...props} />
      {error && (
        <small className="text-destructive">
          {error.message}
        </small>
      )}
    </div>
  )
}

export default BaseInput
