import { connectDB } from "../config/db.js";

export const ensureDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("❌ DB connection error:", err);
    res.status(500).json({ message: "Database connection failed" });
  }
};
