import Header from "./Header"
import Footer from "./Footer"

import {
  Card,
  CardContent,
} from "@shadcn/card"
import clsx from "clsx"

import type { PropsWithClassName } from "@customTypes/ui"
import { PropsWithChildren } from "react"

type AuthFormHeaderProps = {
  title?: string
  description?: string
}

type AuthFormProps = AuthFormHeaderProps & PropsWithClassName & PropsWithChildren

function UserAuthForm({ title, description, children, className }: AuthFormProps) {
  return (
    <Card className={clsx("flex flex-col gap-6", className)}>
      <Header />
      <CardContent>
        {children}
        <Footer />
      </CardContent>
    </Card>
  )
}

export default UserAuthForm
