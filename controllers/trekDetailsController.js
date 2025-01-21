import packages from "../data/packages.js";

const getTrekDetails = (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const data = packages
			.filter((trek) => trek.id === id)
			.map(
				({
					id,
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
				}) => {
					return {
						id: id.toString(),
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
				}
			);

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
