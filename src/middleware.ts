import {
  NextResponse,
  type NextRequest,
} from "next/server"

import normalizeIp from "@utils/normalizeIp"
import { sendErrorResponse } from "@server/lib/responseHandlers"

const rateLimiter = new Map()
const REQUEST_LIMIT = 60
const RATE_LIMITER_WINDOW = 60_000 // 1 minute

export default async function middleware(request: NextRequest) {
  if (request.url.includes("too-many-requests")) {
    return NextResponse.next()
  }

  const ip = normalizeIp(request)
  let trackedRequests = rateLimiter.get(ip)
  const now = Date.now()
  if (trackedRequests) {
    rateLimiter.set(ip, trackedRequests.filter((trackedTime: number) => trackedTime > now - RATE_LIMITER_WINDOW))
    trackedRequests = rateLimiter.get(ip)
    if (trackedRequests.length > REQUEST_LIMIT) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return sendErrorResponse({
          status: 429,
          message: "Too Many Requests"
        })
      } else {
        return NextResponse.redirect(new URL("/too-many-requests", request.url))
      }
    }
    trackedRequests.push(now)
  } else {
    rateLimiter.set(ip, [now])
  }

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

