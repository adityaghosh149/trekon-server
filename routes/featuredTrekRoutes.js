import express from "express";
import { getFeaturedTreks } from "../controllers/featuredTreksController.js";

const router = express.Router();

router.get("/", getFeaturedTreks);

export default router;
