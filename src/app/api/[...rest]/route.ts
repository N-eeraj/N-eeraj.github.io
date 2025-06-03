import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    message: "Api not found"
  }, {
    status: 404,
  })
}
