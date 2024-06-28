import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan("common"));
app.use(helmet());

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", movieRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
