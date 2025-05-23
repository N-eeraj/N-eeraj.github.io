import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shadcn/card"

import type { AuthFormHeaderProps } from "@customTypes/auth/form"

function AuthFormHeader({ title, description }: AuthFormHeaderProps) {
  if (!(title || description)) return

  return (
    <CardHeader>
      {title && (
        <CardTitle className="text-2xl">
          {title}
        </CardTitle>
      )}
      {description && (
        <CardDescription className="text-muted-foreground/80">
          {description}
        </CardDescription>
      )}
    </CardHeader>
  )
}

export default AuthFormHeader
