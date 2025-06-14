import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogService {
  static async getBlogData(slug: string) {
    switch(slug) {
      case "product-engineering-matrix":
        return await ProductEngineeringMatrixService.getData()
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
