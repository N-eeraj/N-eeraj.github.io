import BlogService from "@serverService/blog/BlogService"
import {
  sendErrorResponse,
  sendSuccessResponse,
  throwResponseError,
} from "@server/lib/responseHandlers"
import { validateRequest } from "@server/lib/validation"

export async function GET(_request: Request, { params }:  { params: Promise<{ slug?: string }>}) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const blogInstance = BlogService.getInstance(slug)
    const data = await blogInstance.getData()

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

export async function POST(request: Request, { params }:  { params: Promise<{ slug?: string }>}) {
  try {
    const { slug } = await params
    if (!slug) {
      throwResponseError({
        message: "Blog not found",
        status: 404,
      })
    }

    const blogInstance = BlogService.getInstance(slug)
    const schema = blogInstance.schema
    const validatedRequest = await (schema ? validateRequest(request, schema) : request.json())
    console.log(validatedRequest)

    return sendSuccessResponse({
      message: "Saved Response Successfully",
    })
  } catch (error) {
    return sendErrorResponse({
      message: error instanceof Error ? error.message : "An unknown error occurred",
      ...(error ?? {}),
    })    
  }
}
