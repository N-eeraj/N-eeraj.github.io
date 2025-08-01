import { z } from "zod"

export const signUpFormSchema = z.object({
  name: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .min(2, "Please enter at least 2 characters"),
  email: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .email("Please enter a valid email"),
  password: z.string({ message: "Please fill this field" })
    .nonempty("Please fill this field")
    .min(8, "Please enter at least 8 characters"),
})
