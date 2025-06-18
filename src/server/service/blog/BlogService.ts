import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import BlogServiceHelper from "@server/helpers/BlogHelper"
import { throwResponseError } from "@server/lib/responseHandlers"
import { BLOG_SLUG } from "@constants/blogs"

export default class BlogService {
  static getInstance(slug: string): BlogServiceHelper {
    switch(slug) {
      case BLOG_SLUG.PRODUCT_ENGINEERING_MATRIX:
        return new ProductEngineeringMatrixService()
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
