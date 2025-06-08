import AuthService from "@serverService/AuthService"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"

export async function POST() {
  try {
    await AuthService.logout()
    return sendSuccessResponse({
      message: "Logged Out Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
