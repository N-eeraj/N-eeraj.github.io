import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from "@schema/user/auth"

import request from "@utils/request"
import type { z } from "zod"

export default function useSignUp() {
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
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = async (body: z.infer<typeof signUpFormSchema>) => {
    clearErrors()
    try {
      const data = await request("/api/sign-up", {
        method: "POST",
        body,
      })
      console.log(data)
    } catch (error: any) {
      if (error?.errors) {
        Object.entries(error.errors)
          .forEach(([field, error]) => {
            setError(field as keyof typeof signUpFormSchema.shape, {
              message: (error as Array<string>)[0],
            })
          })
      } else if (error?.message) {
        setError("root", error)
      }
    }
  }

  return {
    register,
    errors,
    onSubmit,
    handleSubmit,
    isSubmitting,
  }
}
