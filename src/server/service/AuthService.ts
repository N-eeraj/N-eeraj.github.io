import { cookies } from "next/headers"
import bcrypt from "bcrypt"
import crypto from "crypto"

import connectDB from "@server/db"
import UserModel from "@model/User"
import { throwResponseError } from "@server/lib/responseHandlers"
import type {
  SignUpFormSchema,
  LoginFormSchema,
} from "@customTypes/auth/form"

export default class AuthService {
  private static async setToken(user: any) {
    const token = crypto.randomBytes(32).toString("hex")
    const cookieStore = await cookies()
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
    })

    user.addToken(token)
    user.save()
  }

  static async signUp({ name, email, password }: SignUpFormSchema) {
    await connectDB()

    const isEmailTaken = await UserModel.countDocuments({ email })
    if (isEmailTaken) {
      throwResponseError({
        data: {
          email: ["Email already taken"],
        },
        status: 409,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    })

    await this.setToken(newUser)

    return newUser.toObject()
  }

  static async login({ email, password }: LoginFormSchema) {
    await connectDB()

    const user = await UserModel.findOne({ email })

    const isValidPassword = await bcrypt.compare(password, user?.password ?? "")
    if (!user || !isValidPassword) {
      throwResponseError({
        message: "Invalid email or password",
        status: 401,
      })
    }

    await this.setToken(user)

    return user.toObject()
  }
}
