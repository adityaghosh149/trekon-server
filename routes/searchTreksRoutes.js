import express from "express";
import { getTreks } from "../controllers/searchTreksController.js";

const router = express.Router();

router.get("/", getTreks);

export default router;
