import connectDB from "@server/db"
import UserService from "@serverService/UserService"
import BlogServiceHelper from "@server/helpers/BlogHelper"
import BlogModel from "@model/Blog"
import { PRODUCT_ENGINEERING_MATRIX } from "@constants/blogs/slugs"
import type {
  Option,
  PollData,
} from "@customTypes/blog/productEngineeringMatrix"
import { submitSchema } from "@schema/blogs/productEngineeringMatrix"

export default class ProductEngineeringMatrixService extends BlogServiceHelper {
  static get schema() {
    return submitSchema
  }

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

  static override async getData(): Promise<PollData> {
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
}
