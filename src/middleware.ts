import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const privateApiRoutes = [
  "/logout",
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (privateApiRoutes.includes(pathname.replace("/api", ""))) {
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
