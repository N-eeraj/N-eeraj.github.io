import UserAuthForm from "@components/User/Auth/Form"
import Form from "./Form"
import clsx from "clsx"

import type { PropsWithClassName } from "@customTypes/ui"

function LoginForm({ className }: PropsWithClassName) {
  return (
    <UserAuthForm className={clsx("flex flex-col gap-6", className)}>
      <Form />
    </UserAuthForm>
  )
}

export default LoginForm
