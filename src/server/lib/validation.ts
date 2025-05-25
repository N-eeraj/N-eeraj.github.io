import { NextResponse } from "next/server"
import type {
  ZodObject,
  ZodRawShape,
} from "zod"

export async function validateRequest<T extends ZodRawShape>(request: Request, schema: ZodObject<T>) {
  let body

  try {
    body = await request.json()
  } catch (error) {
    return [
      null,
      NextResponse.json({
        error: "Malformed JSON"
      }, {
        status: 400,
      })
    ]
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

    return [
      null,
      NextResponse.json({
        errors: error.formErrors,
      }, { status })
    ]
  }

  return [data, null]
}
