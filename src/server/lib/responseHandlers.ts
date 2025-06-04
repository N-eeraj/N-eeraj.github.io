import { NextResponse } from "next/server"
import type { ResponseArgs } from "@customTypes/network"

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

export function throwResponseError(error: ResponseArgs): never {
  throw error
}
