import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    company: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
