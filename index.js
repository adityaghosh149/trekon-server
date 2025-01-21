import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import locationRoutes from "./routes/locationsRoutes.js";
import serachTrekRoutes from "./routes/searchTreksRoutes.js";
import trekDetailsRoutes from "./routes/trekDetailsRoutes.js";
import trekRoutes from "./routes/trekRoutes.js";

// Initialize the express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

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
	const port = process.env.PORT || 5500;
	app.listen(port, () => console.log(`Server is running on port ${port}`));
} catch (error) {
	console.error("Error connecting to the database:", error);
	process.exit(1); // Exit the process if DB connection fails
}
