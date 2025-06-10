import UserService from "@serverService/UserService"
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "@server/lib/responseHandlers"

export async function GET() {
  try {
    const {
      token: _token,
      ...data
    } = await UserService.getUserByToken()
    return sendSuccessResponse({
      data,
      message: "Fetched User Details Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
