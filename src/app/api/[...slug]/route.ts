import { sendErrorResponse } from "@server/lib/responseHandlers"

function handleNotFound() {
  return sendErrorResponse({
    message: "API not found",
    status: 404,
  })
}

export const GET = handleNotFound
export const POST = handleNotFound
export const PUT = handleNotFound
export const DELETE = handleNotFound
export const PATCH = handleNotFound
