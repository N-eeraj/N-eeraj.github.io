import { throwResponseError } from "@server/lib/responseHandlers"
import type {
  ZodObject,
  ZodRawShape,
} from "zod"

export async function validateRequest<T extends ZodRawShape>(request: Request, schema: ZodObject<T>) {
  let body

  try {
    const contentType = request.headers.get("content-type") || ""
    if (contentType.includes("multipart/form-data")) {
      body = Object.fromEntries(await request.formData())
    } else {
      body = await request.json()
    }
  } catch {
    body = {}
  }

  const {
    success,
    data,
    error,
  } = schema.safeParse(body)

  if (!success) {
    let status = 422

    if (error.issues.some(({ code }) => ["invalid_type", "too_small"].includes(code))) {
      status = 400
    }

    throwResponseError({
      data: error.formErrors.fieldErrors,
      status,
      message: "Validation Error",
    })
  }

  return data
}
