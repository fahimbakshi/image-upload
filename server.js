// server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import imageRoutes from "./router/image.router.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads"))); // serve images

// Routes
app.use("/api", imageRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
