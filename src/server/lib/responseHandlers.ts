import { NextResponse } from "next/server"

interface ResponseArgs {
  data?: unknown
  message?: string
  status?: number
  headers?: HeadersInit
}

export function sendSuccessResponse({ data, message = "Success", status = 200, headers }: ResponseArgs) {
  return NextResponse.json({
    data,
    message,
  }, {
    status,
    headers,
  })
}

export function sendErrorResponse({ data, message = "Oops! Something went wrong.", status = 500, headers }: ResponseArgs) {
  return NextResponse.json({
    errors: data,
    message,
  }, {
    status,
    headers,
  })
}
