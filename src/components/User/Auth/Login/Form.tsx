"use client"

import BaseInput from "@components/Base/Input"
import ErrorMessage from "@components/Base/ErrorMessage"
import Button from "@components/Base/Button"
import useLogin from "@hooks/user/useLogin"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "@schema/user/auth"
import request from "@utils/request"
import type { z } from "zod"

function LoginForm() {
  useLogin()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    clearErrors,
    setError,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (body: z.infer<typeof loginFormSchema>) => {
    clearErrors()
    try {
      const data = await request("/api/sign-up", {
        method: "POST",
        body,
      })
      console.log(data)
    } catch (error: any) {
      if (error?.error) {
        setError("root", error.error)
      } else if (error?.errors) {
        Object.entries(error.errors)
          .forEach(([field, error]) => {
            setError(field as keyof typeof loginFormSchema.shape, {
              message: (error as Array<string>)[0],
            })
          })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <BaseInput
            {...register("email")}
            error={errors.email}
            label="Email"
            placeholder="johndoe@email.com"
            className="placeholder:text-muted-foreground/50" />
        </div>
        <div className="grid gap-2">
          <BaseInput
            {...register("password")}
            error={errors.password}
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="placeholder:text-muted-foreground/50" />
        </div>

        <ErrorMessage error={errors.root} />
        <Button
          loading={isSubmitting}
          className="w-full bg-foreground hover:bg-foreground/80">
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
