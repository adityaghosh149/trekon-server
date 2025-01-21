import packages from "../data/packages.js";

const getTrekDetails = (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const trek = packages.find((trek) => trek.id === id);

		if (!trek) {
			return res.status(404).json({ message: "Trek not found" });
		}

		const {
			id: trekId,
			title,
			duration,
			description,
			groupSizeMin,
			groupSizeMax,
			difficulty,
			availableSlots,
			startingPoint,
			price,
			trekDays,
			coverImage,
			bookingDeadline,
			sherpa,
		} = trek;

		const data = {
			id: trekId.toString(),
			title,
			description,
			duration,
			availableSlots,
			groupSize: groupSizeMin + "-" + groupSizeMax,
			difficulty,
			startingPoint,
			bookingDeadline,
			price,
			coverImage,
			trekDays,
			sherpa,
		};

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Failed to fetch trek details",
			error: error.message,
		});
	}
};

export { getTrekDetails };
