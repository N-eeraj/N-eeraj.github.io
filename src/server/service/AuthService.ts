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

    const { insertedId } = await collection.insertOne({ name, email, password })
    return {
      _id: insertedId,
      name,
      email,
    }
  }
}
