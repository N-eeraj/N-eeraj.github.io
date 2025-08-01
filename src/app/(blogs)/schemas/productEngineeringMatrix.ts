import { z } from "zod"
import { OPTIONS } from "@blogs/constants//productEngineeringMatrix"

export const submitSchema = z.object({
  option: z.enum(OPTIONS, {
    message: "Please select a valid option",
  })
})
