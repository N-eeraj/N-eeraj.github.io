import { REST_METHODS } from "@constants/network"

export type RestMethod = typeof REST_METHODS[number]

export interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: Record<string, unknown> | FormData | BodyInit
}

export interface ResponseArgs {
  data?: unknown
  message?: string
  status?: number
  headers?: HeadersInit
}

export interface MutationError extends Error {
  errors?: Record<string | number | symbol, unknown>
}
