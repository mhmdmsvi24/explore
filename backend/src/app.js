import express from "express";
import imageRoute from "./routes/image.route.js";
import { errorHandler } from "./middleware/error.js"

const app = express();

app.use(express.json());
app.use("/api/v1", imageRoute);

app.use(errorHandler);

export default app;
