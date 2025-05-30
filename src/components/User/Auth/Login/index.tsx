import UserAuthForm from "@components/User/Auth/Form"
import Form from "./Form"
import type { AuthFormProps } from "@customTypes/auth/form"

function LoginForm({ replace, className }: AuthFormProps) {
  return (
    <UserAuthForm
      title="Login"
      description="Enter your email below to login to your account"
      footerText="Don't have an account?"
      segue={{
        link: "/sign-up",
        text: "Sign Up",
        replace,
      }}
      className={className}>
      <Form />
    </UserAuthForm>
  )
}

export default LoginForm
