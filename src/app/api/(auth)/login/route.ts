import { NextResponse } from "next/server"
import { loginFormSchema } from "@schema/user/auth"

export async function POST(request: Request) {
  let body

  try {
    body = await request.json()
  } catch (error) {
    return NextResponse.json({
      error: "Malformed JSON"
    }, {
      status: 400,
    })
  }

  const {
    success,
    data,
    error,
  } = loginFormSchema.safeParse(body)

  if (!success) {
    console.log(error.issues)
    let status = 422

    if (error.issues.some(({ code }) => ["invalid_type", "too_small"].includes(code))) {
      status = 400
    }

    return NextResponse.json({
      errors: error.formErrors,
    }, { status })
  }

  console.log(data)

  return Response.json({
    message: "Logged In Successfully",
  })
}
