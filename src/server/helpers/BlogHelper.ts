import { throwResponseError } from "@server/lib/responseHandlers"
import type {
  ZodObject,
  ZodRawShape,
} from "zod"
import type { MaybePromise } from "@customTypes/utils"
import type { RestMethod } from "@customTypes/network"

export default class BlogServiceHelper {
  private static throwInvalidAction(method: RestMethod) {
    throwResponseError({
      message: `Blog doesn't have a ${method} action`,
      status: 405,
    })
  }

  private callStatic<Member extends keyof typeof BlogServiceHelper>(member: Member, args?: unknown) {
    const staticMember = (this.constructor as typeof BlogServiceHelper)[member]

    if (typeof staticMember === "function") {
      return staticMember(args)
    }
    return staticMember
  }

  get(args?: unknown): MaybePromise<unknown> {
    return this.callStatic("get", args)
  }
  static get(_args: unknown) {
    this.throwInvalidAction("GET")
  }

  get postSchema() {
    return this.callStatic("postSchema")
  }
  static get postSchema(): ZodObject<ZodRawShape> | null {
    return null
  }
  post(args?: unknown): MaybePromise<unknown> {
    return this.callStatic("post", args)
  }
  static post(_args: unknown) {
    this.throwInvalidAction("POST")
  }

  get putSchema() {
    return this.callStatic("putSchema")
  }
  static get putSchema(): ZodObject<ZodRawShape> | null {
    return null
  }
  put(args?: unknown): MaybePromise<unknown> {
    return this.callStatic("put", args)
  }
  static put(_args: unknown) {
    this.throwInvalidAction("PUT")
  }

  get patchSchema() {
    return this.callStatic("patchSchema")
  }
  static get patchSchema(): ZodObject<ZodRawShape> | null {
    return null
  }
  patch(args?: unknown): MaybePromise<unknown> {
    return this.callStatic("patch", args)
  }
  static patch(_args: unknown) {
    this.throwInvalidAction("PATCH")
  }

  delete(args?: unknown): MaybePromise<unknown> {
    return this.callStatic("delete", args)
  }
  static delete(_args: unknown) {
    this.throwInvalidAction("DELETE")
  }
}
