import { cookies } from "next/headers"
import connectDB from "@server/db"
import UserModel from "@models/User"
import { throwResponseError } from "@server/lib/responseHandlers"

export default class UserService {
  private static isStrictCheck(isStrict: boolean) {
    if (!isStrict) return null
    return throwResponseError({
      message: "Unauthorized",
      status: 401,
    })
  }

  static async fetchUser({ isStrict = false } = {}) {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value || ""

    if (!token) {
      return this.isStrictCheck(isStrict)
    }

    await connectDB()
    const user = await UserModel.findOne({
      tokens: token,
    })

    if (!user) {
      return this.isStrictCheck(isStrict)
    }

    return {
      ...user.toObject(),
      token,
    }
  }
}
