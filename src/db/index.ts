import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);

export { userSchema, courseSchema };
