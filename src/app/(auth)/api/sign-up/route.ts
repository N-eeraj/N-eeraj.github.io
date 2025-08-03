import AuthService from "@auth/services/AuthService"
import { validateRequest } from "@server/lib/validation"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"
import { signUpFormSchema } from "@auth/schemas/signUp"

export async function POST(request: Request) {
  try {
    const validatedRequest = await validateRequest(request, signUpFormSchema)

    const data = await AuthService.signUp(validatedRequest)

    return sendSuccessResponse({
      data,
      message: "Signed Up Successfully",
      status: 201,
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })
  }
}
