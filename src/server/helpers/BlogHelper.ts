import { throwResponseError } from "@server/lib/responseHandlers"
import type {
  ZodObject,
  ZodRawShape,
} from "zod"
import type { MaybePromise } from "@customTypes/utils"

export default class BlogServiceHelper {
  getData(): MaybePromise<unknown> {
    return (this.constructor as typeof BlogServiceHelper).getData()
  }
  static getData() {
    throwResponseError({
      message: "Blog not found",
      status: 404,
    })
  }

  get schema() {
    return (this.constructor as typeof BlogServiceHelper).schema
  }
  static get schema(): ZodObject<ZodRawShape> | null {
    return null
  }
}
