import AuthService from "@serverService/AuthService"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"

export async function GET() {
  try {
    const data = await AuthService.validateToken()
    return sendSuccessResponse({
      data,
      message: "Validated Token Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
