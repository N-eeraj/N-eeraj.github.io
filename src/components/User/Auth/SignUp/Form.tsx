"use client"

import BaseInput from "@components/Base/Input"
import { Button } from "@shadcn/button"
import useSignUp from "@hooks/user/useSignUp"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from "@schema/user/auth"
import type { z } from "zod"

function SignUpForm() {
  useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = ({ name, email, password }: z.infer<typeof signUpFormSchema>) => {
    console.log({
      name, email, password
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <BaseInput
            {...register("name")}
            error={errors.name}
            label="Name"
            placeholder="John Doe"
            className="placeholder:text-muted-foreground/50" />
        </div>
        <div className="grid gap-2">
          <BaseInput
            {...register("email")}
            error={errors.email}
            label="Email"
            type="email"
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
        <Button
          type="submit"
          className="w-full bg-foreground hover:bg-foreground/80">
          Login
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
