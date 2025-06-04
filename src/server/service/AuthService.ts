import { connectDB } from "@server/db"
import { signUpFormSchema } from "@schema/user/auth"
import type { z } from "zod"

export default class AuthService {
  static async signUp({ name, email, password }: z.infer<typeof signUpFormSchema>) {
    const db = await connectDB()
    const collection = db.collection("users")
    const data = await collection.insertOne({ name, email, password })
    return data
  }
}
