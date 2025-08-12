import {
  NextResponse,
  type NextRequest,
} from "next/server"

import { sendErrorResponse } from "@server/lib/responseHandlers"
import normalizeIp from "@utils/normalizeIp"

export default class RateLimiter {
  rateLimiter: Map<string, Array<number>> = new Map()

  /**
   * Creates a new RateLimiter instance.
   *
   * @param requestLimit - The maximum number of allowed requests per IP within the time window (default is 60).
   * @param window - The time window in milliseconds during which requests are counted (default is 1 minute).
   */
  constructor(
    private requestLimit: number = 60, // 60 requests per window
    private window: number = 60_000, // 1 minute window
  ) {}

  checkRateLimit(request: NextRequest) {
    const ip = normalizeIp(request)
    if (!ip) return

    const now = Date.now()
    let trackedRequests = this.rateLimiter.get(ip) || []

    // Remove old requests
    trackedRequests = trackedRequests.filter(time => time > now - this.window)

    if (trackedRequests.length >= this.requestLimit) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return sendErrorResponse({
          status: 429,
          message: "Too Many Requests"
        })
      } else {
        return NextResponse.redirect(new URL("/too-many-requests", request.url))
      }
    }

    // Record new request
    trackedRequests.push(now)
    this.rateLimiter.set(ip, trackedRequests)
  }
}
