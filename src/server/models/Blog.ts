import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  blog: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
}, {
  strict: false,
  timestamps: true,
})

blogSchema.set("toObject", {
  transform: function (_doc, {
    _id,
    __v,
    userId: _userId,
    ...data
  }) {
    return {
      id: _id.toString(),
      ...data,
    }
  }
})

const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)

export default BlogModel
