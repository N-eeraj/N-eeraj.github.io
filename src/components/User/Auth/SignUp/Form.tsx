"use client"

import BaseInput from "@components/Base/Input"
import ErrorMessage from "@components/Base/ErrorMessage"
import Button from "@components/Base/Button"
import useAuth from "@hooks/user/useAuth"
import { signUpFormSchema } from "@schema/user/auth"

function SignUpForm() {
  const {
    register,
    errors,
    onSubmit,
    handleSubmit,
    isSubmitting,
    } = useAuth({
      schema: signUpFormSchema,
      endpoint: "/api/sign-up",
    })

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
          className="w-full bg-white hover:bg-white/90">
          Sign Up
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
