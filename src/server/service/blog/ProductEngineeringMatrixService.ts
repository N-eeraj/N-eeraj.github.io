import connectDB from "@server/db"
import UserService from "@serverService/UserService"
import { throwResponseError } from "@server/lib/responseHandlers"
import BlogModel from "@model/Blog"
import { BLOG_SLUG } from "@constants/blogs"
import type {
  Option,
  PollData,
  SubmitSchema,
} from "@customTypes/blog/productEngineeringMatrix"
import { submitSchema } from "@schema/blogs/productEngineeringMatrix"

const PRODUCT_ENGINEERING_MATRIX = BLOG_SLUG.PRODUCT_ENGINEERING_MATRIX

export default class ProductEngineeringMatrixService {
  private static async getCount(): Promise<PollData> {
    const blogData = await BlogModel.aggregate([
      { $match: { blog: PRODUCT_ENGINEERING_MATRIX } },
      { $group: { _id: "$option", count: { $sum: 1 } } },
    ])
    return blogData.reduce((data, { _id, count }) => {
      data[_id] = count
      return data
    }, {})
  }

  private static async getUserData(): Promise<Option | undefined> {
    const { id } = await UserService.fetchUser() ?? {}
    const userOption = await BlogModel.findOne({
      userId: id,
      blog: PRODUCT_ENGINEERING_MATRIX,
    }, { option: 1 })
    return userOption?.toObject().option
  }

  static async get(): Promise<PollData> {
    await connectDB()

    const [blogData, userVote] = await Promise.all([
      this.getCount(),
      this.getUserData(),
    ])

    return {
      ...blogData,
      userVote,
    }
  }

  static get postSchema() {
    return submitSchema
  }

  static async post({ option }: SubmitSchema) {
    await connectDB()

    const { id: userId } = await UserService.fetchUser({ isStrict: true })

    const existingResponse = await BlogModel.findOne({
      blog: PRODUCT_ENGINEERING_MATRIX,
      userId,
    })

    if (existingResponse) {
      throwResponseError({
        data: { option: existingResponse.option },
        message: "Already submitted a response",
        status: 409,
      })
    }

    const response = new BlogModel({
      blog: PRODUCT_ENGINEERING_MATRIX,
      userId,
      option,
    })

    await response.save()
    return response.toObject()
  }

  static get patchSchema() {
    return submitSchema
  }

  static async patch({ option }: SubmitSchema) {
    await connectDB()
    console.log(option) 
  }
}
