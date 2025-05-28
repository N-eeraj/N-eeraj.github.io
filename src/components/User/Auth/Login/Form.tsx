"use client"

import useLogin from "@hooks/user/useLogin"

import { Input } from "@shadcn/input"
import { Label } from "@shadcn/label"
import { Button } from "@shadcn/button"

function LoginForm() {
  useLogin()

  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@email.com"
            className="placeholder:text-muted-foreground/50"
            required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">
            Password
            </Label>
          <Input
            id="password"
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
