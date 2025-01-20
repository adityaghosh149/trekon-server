import locations from "../data/locations.js";

export const getAllLocations = async (req, res) => {
	try {
		const data = locations.map(({ id, name }) => ({
			key: id.toString(),
			label: name,
		}));

		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching locations:", error);
		res.status(500).json({
			success: false,
			message: "Failed to fetch locations. Please try again later.",
		});
	}
};
