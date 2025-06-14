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
  timestamps: true,
})

const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)

export default BlogModel
