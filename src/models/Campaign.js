import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    bank: String,
    message: String,
    recipients: [String],
    sentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema);
