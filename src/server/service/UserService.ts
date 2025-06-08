import { cookies } from "next/headers"
import connectDB from "@server/db"
import UserModel from "@model/User"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class UserService {
  static async getUserByToken() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value || ""

    if (!token) {
      throwResponseError({
        message: "Unauthorized",
        status: 401,
      })
    }

    await connectDB()
    const user = await UserModel.findOne({
      tokens: token,
    })

    if (!user) {
      throwResponseError({
        message: "Unauthorized",
        status: 401,
      })
    }

    return {
      ...user.toObject(),
      token,
    }
  }
}
