import { loginFormSchema } from "@schema/user/auth"
import { validateRequest } from "@serverLib/validation"

export async function POST(request: Request) {
  const [data, error] = await validateRequest(request, loginFormSchema)
  if (error) return error

  console.log(data)

  return Response.json({
    message: "Logged In Successfully",
  })
}
