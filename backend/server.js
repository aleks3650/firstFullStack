import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.route.js";
import cors from "cors";
import path from "path";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("server is runs oon", PORT);
});
