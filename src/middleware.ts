import { cookies } from "next/headers"
import {
  NextResponse,
  type NextRequest,
} from "next/server"

import { sendErrorResponse } from "@server/lib/responseHandlers"

const privateApiRoutes = [
  "/logout",
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (privateApiRoutes.includes(pathname.replace("/api", ""))) {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value || ""
    if (!token) {
      return sendErrorResponse({
        message: "Unauthorized",
        status: 401,
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
