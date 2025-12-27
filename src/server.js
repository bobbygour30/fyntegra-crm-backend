import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Connect to DB (non-blocking for serverless, but await locally for clean startup)
connectDB().catch(err => {
  console.error("Failed to connect to MongoDB:", err);
  // On local dev, exit if DB fails – easier debugging
  if (process.env.NODE_ENV !== "production") {
    process.exit(1);
  }
});

// Detect if we're running on Vercel (serverless) or locally
const isVercel = process.env.VERCEL || process.env.NEXT_PUBLIC_VERCEL_ENV;

if (!isVercel) {
  // Only start the traditional server locally
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// Export the handler for Vercel serverless functions
export default app;  // Vercel will call app(req, res) directly

// Optional: improve cold starts / timeouts on Vercel
export const config = {
  api: {
    // Increase timeout if you have slow DB operations
    maxDuration: 30,
  },
};