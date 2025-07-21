import { use } from "react"
import {
  redirect,
  useSearchParams,
} from "next/navigation"
import { AuthContext } from "@context/Auth"

import {
  useForm,
  type Path,
  type ErrorOption,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import request from "@utils/request"
import type {
  z,
  ZodRawShape,
} from "zod"
import type { UseAuthParams } from "@customTypes/auth"

export default function useAuth<T extends ZodRawShape>({ schema, endpoint }: UseAuthParams<T>) {
  const {
    isLoggedIn,
    setUser,
  } = use(AuthContext)

  const searchParams = useSearchParams()
  const redirectOnAuth = searchParams?.get("redirect-to") ?? "/"

  if (isLoggedIn) {
    redirect(redirectOnAuth)
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
      // redirect(redirectOnAuth)
    } catch (error: unknown) {
      if (error && typeof error === "object") {
        if ("errors" in error && error.errors) {
          Object.entries(error.errors)
            .forEach(([field, error]) => {
              setError(field as Path<z.infer<typeof schema>>, {
                message: (error as Array<string>)[0],
              })
            })
        } else if ("message" in error && error.message) {
          setError("root", error as ErrorOption)
        }
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
