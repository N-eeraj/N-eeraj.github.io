import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const publicApiRoutes = [
  "/api/login",
  "/api/sign-up",
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!publicApiRoutes.includes(pathname)) {
    const token = request.cookies.get("auth-token")

    if (!token) {
      return NextResponse.json({
        error: "Unauthorized",
      }, {
        status: 401
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
