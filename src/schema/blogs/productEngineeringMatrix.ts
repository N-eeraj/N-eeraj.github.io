import { z } from "zod"
import { OPTIONS } from "@constants/blogs/productEngineeringMatrix"

export const submitSchema = z.object({
  option: z.enum(OPTIONS, {
    message: "Please select a valid option",
  })
})
