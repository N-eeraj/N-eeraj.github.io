import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import BlogServiceHelper from "@server/helpers/BlogHelper"
import { throwResponseError } from "@server/lib/responseHandlers"
import {
  PRODUCT_ENGINEERING_MATRIX,
} from "@constants/blogs/slugs"

export default class BlogService {
  static getInstance(slug: string): BlogServiceHelper {
    switch(slug) {
      case PRODUCT_ENGINEERING_MATRIX:
        return new ProductEngineeringMatrixService()
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
