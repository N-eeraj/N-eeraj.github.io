import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .email("Please enter a valid email"),
  password: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field"),
})
