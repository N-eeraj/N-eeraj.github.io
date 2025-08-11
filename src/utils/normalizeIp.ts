import {
  type NextRequest,
} from "next/server"

export default function normalizeIp(request: NextRequest) {
  let ip = request.headers.get("x-forwarded-for")

  // Handle multiple IPs in the header (common in proxies)
  if (ip && ip.includes(",")) {
    ip = ip.split(",")[0].trim() // Get the first IP
  }

  // Normalize IPv4-mapped IPv6 address (e.g., ::ffff:192.168.0.1)
  if (ip && ip.startsWith("::ffff:")) {
    ip = ip.replace("::ffff:", "")
  }

  // Now use `ip` for rate limiting or logging
  return ip
}
