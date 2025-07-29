import BlogServiceHelper from "@serverService/blogs/BlogServiceHelper"
import {
  sendErrorResponse,
  sendSuccessResponse,
  throwResponseError,
} from "@server/lib/responseHandlers"
import { validateRequest } from "@server/lib/validation"
import type { BlogParams } from "@customTypes/blogs"

export async function GET(_request: Request, { params }:  BlogParams) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const BlogService = BlogServiceHelper.getService(slug)
    const data = await BlogService.get()

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

    const BlogService = BlogServiceHelper.getService(slug)
    const schema = BlogService.postSchema
    const validatedRequest = await validateRequest(request, schema)
    const data = await BlogService.post(validatedRequest)

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

export async function PATCH(request: Request, { params }:  BlogParams) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const BlogService = BlogServiceHelper.getService(slug)
    const schema = BlogService.patchSchema
    const validatedRequest = await validateRequest(request, schema)
    const data = await BlogService.patch(validatedRequest)

    return sendSuccessResponse({
      data,
      message: "Updated Response Successfully",
      status: 200,
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
