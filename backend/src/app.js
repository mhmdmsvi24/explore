import express from "express";
import imageRoute from "./routes/image.route.js";
import { errorHandler } from "./middleware/error.js";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use("/api/v1", imageRoute);

app.use(errorHandler);

export default app;
