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
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: {
    type: Array(String),
    required: true,
  },
}, {
  timestamps: true,
})

userSchema.set("toObject", {
  transform: function (_doc, { _id, email, name }) {
    return {
      email,
      name,
      id: _id.toString(),
    }
  }
})

userSchema.methods.addToken = async function (token: string) {
  this.tokens.push(token)
  await this.save()
}

const UserModel = mongoose.models.user || mongoose.model("user", userSchema)

export default UserModel
