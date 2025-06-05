import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: {
    type: Array(String),
    required: true,
  }
})

userSchema.set("toObject", {
  transform: function (_doc, ret) {
    const {
      password,
      tokens,
      __v,
      _id,
      ...data
    } = ret
    return {
      ...data,
      id: _id.toString(),
    }
  }
})


const UserModel = mongoose.models.user || mongoose.model("user", userSchema)

export default UserModel
