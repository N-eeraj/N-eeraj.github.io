import { z } from "zod"
import LANGUAGE_COLORS from "@data/github/colors.json"

export type Language = keyof typeof LANGUAGE_COLORS

export default z.object(Object.fromEntries(Object.keys(LANGUAGE_COLORS).map(lang => ([lang, z.number().optional()]))) as Record<Language, z.ZodOptional<z.ZodNumber>>)
