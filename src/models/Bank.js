import mongoose from "mongoose";

const bankSchema = new mongoose.Schema(
  {
    name: String,
    link: String,
    template: String
  },
  { timestamps: true }
);

export default mongoose.model("Bank", bankSchema);
