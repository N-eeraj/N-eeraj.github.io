import { sendErrorResponse } from "@server/lib/responseHandlers"

export async function POST() {
  return sendErrorResponse({
    message: "Api not found",
    status: 404,
  })
}
