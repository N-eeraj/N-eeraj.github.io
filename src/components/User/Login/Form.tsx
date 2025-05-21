"use client"


import Link from "next/link"
import clsx from "clsx"
import useLogin from "@hooks/useLogin"

import { Button } from "@shadcn/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shadcn/card"
import { Input } from "@shadcn/input"
import { Label } from "@shadcn/label"

import type { PropsWithClassName } from "@customTypes/ui"

function LoginForm({ className }: PropsWithClassName) {
  useLogin()

  return (
    <Card className={clsx("flex flex-col gap-6", className)}>
      <CardHeader>
        <CardTitle className="text-2xl">
          Login
        </CardTitle>
        <CardDescription className="text-muted-foreground/80">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <Button type="submit" className="w-full bg-foreground hover:bg-foreground/80">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center">
            <small>
              Don&apos;t have an account?&nbsp;
            </small>
            <Link
              href="/sign-up">
              <Button
                variant="link"
                type="button"
                className="px-0">
                Sign up
              </Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
