"use client"

import {
  useId,
} from "react"
import ErrorMessage from "@components/Base/ErrorMessage"
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

      <ErrorMessage error={error} />
    </div>
  )
}

export default BaseInput
