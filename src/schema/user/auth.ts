import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .email("Please enter a valid email"),
  password: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field"),
})

export const signUpFormSchema = z.object({
  name: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .min(2, "Please enter at least characters"),
  email: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .email("Please enter a valid email"),
  password: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field"),
})
