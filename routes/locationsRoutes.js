import express from "express";
import { getAllLocations } from "../controllers/locationController.js";

const router = express.Router();

// Define the route to fetch all locations
router.get("/", getAllLocations);

export default router;
