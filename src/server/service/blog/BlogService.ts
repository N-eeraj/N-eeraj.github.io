import ProductEngineeringMatrixService from "@serverService/blog/ProductEngineeringMatrixService"
import { throwResponseError } from "@server/lib/responseHandlers"
import { BLOG_SLUG } from "@constants/blogs"

export default class BlogService {
  static getInstance(slug: string) {
    switch(slug) {
      case BLOG_SLUG.PRODUCT_ENGINEERING_MATRIX:
        return ProductEngineeringMatrixService
      default:
        throwResponseError({
          message: "Blog not found",
          status: 404,
        })
    }
  }
}
