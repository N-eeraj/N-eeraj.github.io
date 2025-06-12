import connectDB from "@server/db"
import UserService from "@serverService/UserService"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogService {
  static async productEngineeringMatrix() {
    const { id } = await UserService.fetchUser() ?? {}

    return {
      red: 30,
      blue: 70,
    }
  }

  static async getBlogData(slug: string) {
    switch(slug) {
      case "product-engineering-matrix":
        return await this.productEngineeringMatrix()
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
