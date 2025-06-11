import connectDB from "@server/db"
import UserService from "@serverService/UserService"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogService {
  static async getBlogData(slug: string) {
    switch(slug) {
      case "product-engineering-matrix":
        return null
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
