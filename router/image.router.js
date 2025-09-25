// router/image.router.js
import express from "express";
import upload from "../middelware/multer.middelware.js";
import { uploadImage, getImages } from "../controller/image.controller.js";

const router = express.Router();

// Routes
router.post("/upload", uploadImage(upload)); // pass multer middleware
router.get("/images", getImages);

export default router;
