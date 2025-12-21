import express from "express";
import { getImage } from "../controller/image.controller.js";

const image_router = express.Router();

image_router.get("/image/:country", getImage);

export default image_router;
