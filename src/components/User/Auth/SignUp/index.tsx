import UserAuthForm from "@components/User/Auth/Form"
import Form from "./Form"

import type { PropsWithClassName } from "@customTypes/ui"

function SignUpForm({ className }: PropsWithClassName) {
  return (
    <UserAuthForm
      title="Sign up"
      description="Enter your email below to create an account"
      footerText="Already have an account?"
      segue={{
        link: "/login",
        text: "Login",
      }}
      className={className}>
      <Form />
    </UserAuthForm>
  )
}

export default SignUpForm
