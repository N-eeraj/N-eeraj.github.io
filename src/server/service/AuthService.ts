import { cookies } from "next/headers"
import bcrypt from "bcrypt"
import crypto from "crypto"

import connectDB from "@server/db"
import { throwResponseError } from "@server/lib/responseHandlers"
import { signUpFormSchema } from "@schema/user/auth"
import type { z } from "zod"

export default class AuthService {
  static async signUp({ name, email, password }: z.infer<typeof signUpFormSchema>) {
    const db = await connectDB()
    const collection = db.collection("users")

    const isEmailTaken = await collection.countDocuments({ email })
    if (isEmailTaken) {
      throwResponseError({
        data: {
          email: ["Email already taken"],
        },
        status: 409,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const token = crypto.randomBytes(32).toString("hex")

    const { insertedId } = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
      tokens: [token],
    })
    
    const cookieStore = await cookies()
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
    })

    return {
      _id: insertedId.toString(),
      name,
      email,
    }
  }
}
