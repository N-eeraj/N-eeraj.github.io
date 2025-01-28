import { z } from "zod"
import languageColors from "@data/github/colors.json"

export type Language = keyof typeof languageColors

export default z.object(Object.fromEntries(Object.keys(languageColors).map(lang => ([lang, z.number().optional()]))) as Record<Language, z.ZodOptional<z.ZodNumber>>)
