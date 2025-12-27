// models/Template.js
import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true }, // e.g., "Hi {{name}}, your loan is active..."
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Template", templateSchema);