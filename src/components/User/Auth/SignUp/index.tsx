import UserAuthForm from "@components/User/Auth/Form"
import Form from "./Form"
import type { AuthFormProps } from "@customTypes/auth/form"

function SignUpForm({ replace, className }: AuthFormProps) {
  return (
    <UserAuthForm
      title="Sign up"
      description="Enter your email below to create an account"
      footerText="Already have an account?"
      segue={{
        link: "/login",
        text: "Login",
        replace,
      }}
      className={className}>
      <Form />
    </UserAuthForm>
  )
}

export default SignUpForm
