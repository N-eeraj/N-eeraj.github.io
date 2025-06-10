export type DateYMD = `${number}-${number}-${number}`

export interface CookieOptions {
  key: string
  value: string
  maxAge?: number
}
