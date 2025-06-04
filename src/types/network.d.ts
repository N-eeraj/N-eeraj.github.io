export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: Record<string, any> | FormData | BodyInit
}

export interface ResponseArgs {
  data?: unknown
  message?: string
  status?: number
  headers?: HeadersInit
}
