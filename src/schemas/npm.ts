import { z } from "zod"

const npmDetailsSchema = z.object({
  name: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  time: z.object({
    modified: z.string(),
  }),
  "dist-tags": z.object({
    latest: z.string(),
  }),
})

export default npmDetailsSchema
