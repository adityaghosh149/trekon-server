import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import locationRoutes from "./routes/locationsRoutes.js";
import serachTrekRoutes from "./routes/searchTreksRoutes.js";
import trekDetailsRoutes from "./routes/trekDetailsRoutes.js";
import trekRoutes from "./routes/trekRoutes.js";

// Initialize the express app
const app = express();

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
	origin: (origin, callback) => {
		const allowedOrigins = process.env.CORS_ORIGIN
			? process.env.CORS_ORIGIN.split(",")
			: [];
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true); // Allow the request
		} else {
			callback(new Error("Not allowed by CORS")); // Block the request
		}
	},
	methods: "GET,POST,PUT,DELETE",
	allowedHeaders: "Content-Type, Authorization",
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/data", express.static(path.join(__dirname, "/data")));

// Routes
app.use("/api/locations", locationRoutes);
app.use("/api/treks", trekRoutes);
app.use("/api/trek-details", trekDetailsRoutes);
app.use("/api/search-treks", serachTrekRoutes);

// Connect to the database and start the server
try {
	// Handle invalid routes
	app.use((req, res) => {
		res.status(404).json({ message: "Not Found" });
	});

	// Start the server
	const port = process.env.PORT || 8080;
	app.listen(port, () => console.log(`Server is running on port ${port}`));
} catch (error) {
	console.error("Error connecting to the database:", error);
	process.exit(1); // Exit the process if DB connection fails
}
