import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shadcn/card"

function AuthFormHeader() {
  return (
    <CardHeader>
      <CardTitle className="text-2xl">
        Login
      </CardTitle>
      <CardDescription className="text-muted-foreground/80">
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
  )
}

export default AuthFormHeader
