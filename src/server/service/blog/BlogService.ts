import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import BlogServiceHelper from "@server/helpers/BlogHelper"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class BlogService {
  static getInstance(slug: string): BlogServiceHelper {
    switch(slug) {
      case "product-engineering-matrix":
        return new ProductEngineeringMatrixService()
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
