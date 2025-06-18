import BlogService from "@serverService/blog/BlogService"
import {
  sendErrorResponse,
  sendSuccessResponse,
  throwResponseError,
} from "@server/lib/responseHandlers"
import { validateRequest } from "@server/lib/validation"
import type { BlogParams } from "@customTypes/blog"

export async function GET(_request: Request, { params }:  BlogParams) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const blogInstance = BlogService.getInstance(slug)
    const data = await blogInstance.get()

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

export async function POST(request: Request, { params }:  BlogParams) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const blogInstance = BlogService.getInstance(slug)
    const schema = blogInstance.postSchema
    const validatedRequest = await (schema ? validateRequest(request, schema) : request.json())
    const data = await blogInstance.post(validatedRequest)

    return sendSuccessResponse({
      data,
      message: "Saved Response Successfully",
      status: 201,
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
