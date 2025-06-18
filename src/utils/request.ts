import type { RequestOptions } from "@customTypes/network"

export default async function request(endpoint: string, options: RequestOptions = {}) {
  if (options.method?.toUpperCase() !== "GET" && options.body && !(options.body instanceof FormData)) {
    options.body = JSON.stringify(options.body)
  }
  const response = await fetch(`${endpoint}`, options as RequestInit)
  const data = await response.json()
  if (!response.ok) {
    if (response.status === 401) {
      if (endpoint === "/api/user") return
      if (endpoint !== "/api/login") {
        location.href = `/login?redirect-to=${location.pathname}`
      }
    }
    throw data
  }
  return data
}
