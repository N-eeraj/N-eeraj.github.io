import {
  NextResponse,
  type NextRequest,
} from "next/server"
import RateLimiter from "@utils/RateLimiter"

const rateLimiter = new RateLimiter()

export default async function middleware(request: NextRequest) {
  if (request.url.includes("too-many-requests")) {
    return NextResponse.next()
  }

  const limitExceeded = rateLimiter.checkRateLimit(request)
  if (limitExceeded) return limitExceeded

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next (Next.js internals)
     * - static files like favicon.ico, robots.txt, etc.
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.\\w+$).*)",
  ],
}
