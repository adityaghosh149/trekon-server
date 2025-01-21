import express from "express";
import { getTrekDetails } from "../controllers/trekDetailsController.js";

const router = express.Router();

router.get("/:id", getTrekDetails);

export default router;
