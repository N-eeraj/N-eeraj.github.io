import type {
  ZodObject,
  ZodRawShape,
} from "zod"

export interface UseAuthParams<T extends ZodRawShape> {
  schema: ZodObject<T>
  endpoint: string
}
