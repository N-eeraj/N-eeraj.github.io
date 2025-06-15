import AuthService from "@serverService/AuthService"
import { validateRequest } from "@server/lib/validation"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"
import { loginFormSchema } from "@schema/user/auth"

export async function POST(request: Request) {
  try {
    const validatedRequest = await validateRequest(request, loginFormSchema)
    const data = await AuthService.login(validatedRequest)

    return sendSuccessResponse({
      data,
      message: "Logged In Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })
  }
}
