import mongoose from "mongoose"
import { DATABASE } from "@constants/enVariables"

let isConnected = false

export default async function connectDB() {
  if (isConnected) return
  try {
    console.log("Connecting to MongoDB")
    await mongoose.connect(DATABASE)
    isConnected = true
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error("MongoDB connection error:", err)
    throw err
  }
}
