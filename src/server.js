import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

/**
 * SERVER ENTRY
 * ------------------------------
 * - Vercel: no app.listen()
 * - Local: app.listen() enabled
 */

connectDB()
  .then(() => {
    console.log("✅ MongoDB connected");

    // ONLY listen locally
    if (!process.env.VERCEL) {
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });

export default app;
