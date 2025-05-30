"use client"

import BaseInput from "@components/Base/Input"
import { Button } from "@shadcn/button"
import useLogin from "@hooks/user/useLogin"

function LoginForm() {
  useLogin()

  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <BaseInput
            label="Email"
            type="email"
            placeholder="johndoe@email.com"
            className="placeholder:text-muted-foreground/50"
            required />
        </div>
        <div className="grid gap-2">
          <BaseInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="placeholder:text-muted-foreground/50"
            required />
        </div>
        <Button
          type="submit"
          className="w-full bg-foreground hover:bg-foreground/80">
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
