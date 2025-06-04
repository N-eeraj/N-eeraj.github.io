import { loginFormSchema } from "@schema/user/auth"
import { validateRequest } from "@serverLib/validation"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@serverLib/responseHandlers"

export async function POST(request: Request) {
  try {
    const [data, error] = await validateRequest(request, loginFormSchema)
    if (error) return error

    return sendSuccessResponse({
      data,
      message: "Logged In Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "",
    })
  }
}
