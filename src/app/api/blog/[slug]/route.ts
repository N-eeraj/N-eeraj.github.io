import BlogService from "@serverService/BlogService"
import {
  sendErrorResponse,
  sendSuccessResponse,
  throwResponseError,
} from "@server/lib/responseHandlers"

export async function GET(_request: Request, { params }:  { params: Promise<{ slug?: string }>}) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const data = await BlogService.getBlogData(slug)

    return sendSuccessResponse({
      data,
      message: "Fetched Blog Details",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
