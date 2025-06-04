import {
  MongoClient,
  type Db,
} from "mongodb"
import { DATABASE } from "@constants/enVariables"

const uri = DATABASE
const client = new MongoClient(uri)
let dbInstance: Db

export default async function connectDB() {
  if (dbInstance) return dbInstance
  try {
    await client.connect()
    console.log("Connected to MongoDB")
    dbInstance = client.db("portfolio")
    return dbInstance
  } catch (err) {
    console.error("MongoDB connection error:", err)
    throw err
  }
}
