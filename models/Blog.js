import { Schema, model, models } from "mongoose";

// Define the blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 21,
  },
});

// Create the Blog model
const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
