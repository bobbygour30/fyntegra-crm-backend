import app from "./app.js";
import { connectDB } from "./config/db.js";

// Cache the DB connection to reuse across invocations (best practice for serverless)
let conn;
async function getDB() {
  if (!conn) {
    conn = await connectDB();  // Your connectDB should return the connection/mongoose instance
  }
  return conn;
}

// Export a serverless handler
export default async function handler(req, res) {
  try {
    await getDB();  // Ensure DB is connected (non-blocking reuse)
    app(req, res);  // Let Express handle the request
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Optional: Configure for Vercel (if you want higher timeouts/cold start improvements)
export const config = {
  api: {
    bodyParser: false,  // If you handle large bodies manually; otherwise keep true
  },
};