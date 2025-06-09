import { use } from "react"
import { redirect } from "next/navigation"
import { AuthContext } from "@context/Auth"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import request from "@utils/request"
import type {
  z,
  ZodObject,
  ZodRawShape,
} from "zod"

interface UseAuthParams<T extends ZodRawShape> {
  schema: ZodObject<T>
  endpoint: string
}

export default function useAuth<T extends ZodRawShape>({ schema, endpoint }: UseAuthParams<T>) {
  const {
    isLoggedIn,
    setUser,
  } = use(AuthContext)

  if (isLoggedIn) {
    redirect("/")
  }

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
    resolver: zodResolver(schema),
  })

  const onSubmit = async (body: z.infer<typeof schema>) => {
    clearErrors()
    try {
      const { data } = await request(endpoint, {
        method: "POST",
        body,
      })
      setUser(data)
      redirect("/")
    } catch (error: any) {
      if (error?.errors) {
        Object.entries(error.errors)
          .forEach(([field, error]) => {
            setError(field as keyof typeof error, {
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
