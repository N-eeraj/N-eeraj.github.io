import { cookies } from "next/headers"
import {
  NextResponse,
  type NextRequest,
} from "next/server"

import { sendErrorResponse } from "@server/lib/responseHandlers"
import { WEBSITE } from "@constants/enVariables"

const privateApiRoutes = [
  "/logout",
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (privateApiRoutes.includes(pathname.replace("/api", ""))) {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value || ""

    const { ok } = await fetch(`${WEBSITE}/api/validate-token`, {
      headers: {
        cookie: `token=${token}`,
      }
    })
    if (!ok) {
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
