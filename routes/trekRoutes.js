import express from "express";
import {
	getAllTreks,
	getFeaturedTreks,
} from "../controllers/trekController.js";

const router = express.Router();

router.get("/", getAllTreks);

router.get("/featured-treks", getFeaturedTreks);

export default router;
