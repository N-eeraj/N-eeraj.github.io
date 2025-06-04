import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function connectDB() {
  try {
    await client.connect()
    console.log("✅ Connected to MongoDB")
    const db = client.db("portfolio")
    return db
  } catch (err) {
    console.error("❌ MongoDB connection error:", err)
    throw err
  }
}
