import connectDB from "@server/db"
import UserService from "@serverService/UserService"
import BlogModel from "@model/Blog"
import type {
  Option,
  PollData,
} from "@customTypes/blog/productEngineeringMatrix"

export default class ProductEngineeringMatrixService {
  static get schema() {
    return 
  }

  private static async getCount(): Promise<PollData> {
    const blogData = await BlogModel.aggregate([
      { $match: { blog: "product-engineering-matrix" } },
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
      blog: "product-engineering-matrix",
    }, { option: 1 })
    return userOption?.toObject().option
  }

  static async getData(): Promise<PollData> {
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
