import { signUpFormSchema } from "@schema/user/auth"
import { validateRequest } from "@serverLib/validation"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@serverLib/responseHandlers"

export async function POST(request: Request) {
  try {
    const [data, error] = await validateRequest(request, signUpFormSchema)
    if (error) return error

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
