import packages from "../data/packages.js";
import { transformPackageData } from "../utils/trek.js";

const getAllTreks = (req, res) => {
	try {
		const data = packages
			.map(transformPackageData)
			.sort((a, b) => b.isSponsored - a.isSponsored);

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Failed to fetch all treks",
			error: error.message,
		});
	}
};

const getFeaturedTreks = (req, res) => {
	try {
		const data = packages
			.filter((trek) => trek.isSponsored)
			.map(transformPackageData);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Failed to fetch featured treks",
			error: error.message,
		});
	}
};

export { getAllTreks, getFeaturedTreks };
