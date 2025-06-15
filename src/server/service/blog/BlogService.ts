import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogService {
  static schema(slug: string) {
    switch(slug) {
      case "product-engineering-matrix":
        return ProductEngineeringMatrixService.schema
      default:
        return null
    }
  }

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
