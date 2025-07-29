import ProductEngineeringMatrixService from "@serverService/blogs/ProductEngineeringMatrixService"
import { throwResponseError } from "@server/lib/responseHandlers"
import { BLOG_SLUG } from "@constants/blogs"
import { REST_METHODS } from "@constants/network"
import { RestMethod } from "@customTypes/network"

export default class BlogServiceHelper {
  private static addProxy(Service: ReturnType<typeof BlogServiceHelper.getServiceClass>) {
    const proxyHandler: ProxyHandler<typeof Service> = {
      get(Service, property: string | symbol) {
        if (!(property in Service) && REST_METHODS.includes((property as string).toUpperCase() as RestMethod)) {
          throwResponseError({
            message: `Blog doesn't have a ${property as string} action`,
            status: 405,
          })
        }
        return Service[property as keyof typeof Service]
      }
    }

    return new Proxy(Service, proxyHandler)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static getServiceClass(slug: string): Record<string, any> {
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

  static getService(slug: string) {
    const Service = this.getServiceClass(slug)
    return this.addProxy(Service)
  }
}
