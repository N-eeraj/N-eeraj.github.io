import { throwResponseError } from "@server/lib/responseHandlers"
import type {
  ZodObject,
  ZodRawShape,
} from "zod"
import type { MaybePromise } from "@customTypes/utils"

export default class BlogServiceHelper {
  get(args?: unknown): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).get(args)
  }
  static get(_args: unknown) {
    throwResponseError({
      message: "Blog doesn't have a GET action",
      status: 405,
    })
  }

  get postSchema() {
    return (this.constructor as typeof BlogServiceHelper).postSchema
  }
  static get postSchema(): ZodObject<ZodRawShape> | null {
    return null
  }

  post(args?: unknown): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).post(args)
  }
  static post(_args: unknown) {
    throwResponseError({
      message: "Blog doesn't have a POST action",
      status: 405,
    })
  }

  get putSchema() {
    return (this.constructor as typeof BlogServiceHelper).putSchema
  }
  static get putSchema(): ZodObject<ZodRawShape> | null {
    return null
  }
  put(args?: unknown): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).put(args)
  }
  static put(_args: unknown) {
    throwResponseError({
      message: "Blog doesn't have a PUT action",
      status: 405,
    })
  }

  get patchSchema() {
    return (this.constructor as typeof BlogServiceHelper).patchSchema
  }
  static get patchSchema(): ZodObject<ZodRawShape> | null {
    return null
  }
  patch(args?: unknown): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).patch(args)
  }
  static patch(_args: unknown) {
    throwResponseError({
      message: "Blog doesn't have an PATCH action",
      status: 405,
    })
  }

  delete(args?: unknown): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).delete(args)
  }
  static delete(_args: unknown) {
    throwResponseError({
      message: "Blog doesn't have a DELETE action",
      status: 405,
    })
  }
}
