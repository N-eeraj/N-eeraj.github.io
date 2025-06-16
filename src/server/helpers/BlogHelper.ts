import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogServiceHelper {
  getData() {
    return (this.constructor as typeof BlogServiceHelper).getData()
  }

  static getData() {
    throwResponseError({
      message: "Blog not found",
      status: 404,
    })
  }

  get schema() {
    return null
  }
}
