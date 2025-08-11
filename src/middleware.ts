import {
  NextResponse,
  type NextRequest,
} from "next/server"

import normalizeIp from "@utils/normalizeIp"
import { sendErrorResponse } from "@server/lib/responseHandlers"

const rateLimiter = new Map()
const REQUEST_LIMIT = 1
 
export default async function middleware(request: NextRequest) {
  const ip = normalizeIp(request)
  const trackedRequests = rateLimiter.get(ip)
  if (trackedRequests) {
    console.log(trackedRequests)
    if (trackedRequests.length > REQUEST_LIMIT) {
      if (!request.url.includes("too-many-requests")) {
        if (request.nextUrl.pathname.startsWith("/api")) {
          return sendErrorResponse({
            status: 429,
            message: "Too Many Requests"
          })
        } else {
          return NextResponse.redirect(new URL("/too-many-requests", request.url))
        }
      }
    }
    trackedRequests.push(Date.now())
  } else {
    rateLimiter.set(ip, [Date.now()])
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

