import AuthService from "@serverService/AuthService"
import { validateRequest } from "@server/lib/validation"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"
import { signUpFormSchema } from "@schema/user/auth"

export async function POST(request: Request) {
  try {
    const [validatedRequest, error] = await validateRequest(request, signUpFormSchema)
    if (error) return error

    const data = await AuthService.signUp(validatedRequest)

    return sendSuccessResponse({
      data,
      message: "Signed Up Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "",
    })
  }
}
