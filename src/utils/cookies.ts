interface CookieOptions {
  key: string
  value: string
  maxAge?: number
}

export function setCookie({ key, value, maxAge }: CookieOptions) {
  document.cookie = `${key}=${value};path=/;max-age=${maxAge}`
}

export function getCookie(key: string) {
  return document.cookie
    .split("; ")
    .find(cookie => cookie.startsWith(`${key}=`))
    ?.split("=")[1] || null
}

export function resetCookie(key: string) {
  document.cookie = `${key}=;path=/;max-age=0`
}
