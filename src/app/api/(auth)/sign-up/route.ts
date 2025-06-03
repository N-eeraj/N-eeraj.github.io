import { NextResponse } from "next/server"
import { signUpFormSchema } from "@schema/user/auth"
import { validateRequest } from "@serverLib/validation"

export async function POST(request: Request) {
  try {
    const [data, error] = await validateRequest(request, signUpFormSchema)
    if (error) return error
    
    return Response.json({
      data,
      message: "Signed Up Successfully",
    })
  } catch (error) {
    return NextResponse.json({
      message: (error instanceof Error ? error.message : "Oops! Something went wrong."),
    }, { status: 500 })
  }
}
