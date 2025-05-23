import Header from "./Header"
import Footer from "./Footer"

import {
  Card,
  CardContent,
} from "@shadcn/card"
import clsx from "clsx"
import type { AuthFormProps } from "@customTypes/auth/form"

function UserAuthForm({ title, description, footerText, segue, children, className }: AuthFormProps) {
  return (
    <Card className={clsx("flex flex-col gap-6", className)}>
      <Header
        title={title}
        description={description} />
      <CardContent>
        {children}
        <Footer
          footerText={footerText}
          segue={segue} />
      </CardContent>
    </Card>
  )
}

export default UserAuthForm
