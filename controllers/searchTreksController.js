import packages from "../data/packages.js";

const getStartDate = (deadline) => {
	const deadlineDate = new Date(deadline);
	const startDate = new Date(deadlineDate);
	startDate.setDate(deadlineDate.getDate() + 5);
	return startDate.toISOString().split("T")[0];
};

const getEndDate = (startDate, durationDays) => {
	const start = new Date(startDate);
	const duration = parseInt(durationDays, 10);
	const endDate = new Date(start);
	endDate.setDate(start.getDate() + duration);
	return endDate.toISOString().split("T")[0];
};

const getTreks = () => {
	const { location, dateRange } = req.query;

	if (!location || !dateRange) {
		return res
			.status(400)
			.send(
				"Missing required query parameters: location and/or dateRange"
			);
	}

	const [startDate, endDate] = dateRange.split("_");
	if (!startDate || !endDate) {
		return res
			.status(400)
			.send("Invalid dateRange format. Use format: startDate_endDate");
	}

	//

	res.send({
		message: "Trek details retrieved successfully",
		location,
		startDate,
		endDate,
	});
};

export { getTreks };
