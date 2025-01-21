import packages from "../data/packages.js";
import changeDateFormat from "../utils/date.js";
import {
	getEndDate,
	getStartDate,
	transformPackageData,
} from "../utils/trek.js";

const isTrekWithinQueryDateRange = (
	queryStartDate,
	queryEndDate,
	trekStartDate,
	trekEndDate
) => {
	return trekStartDate >= queryStartDate && trekEndDate <= queryEndDate;
};

const getTreks = (req, res) => {
	const { location, dateRange } = req.query;

	if (!dateRange) {
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

	console.log(startDate, endDate);

	let data = [];
	if (location == "") {
		data = packages
			.filter((item) => {
				const trekStartDate = getStartDate(item.bookingDeadline);
				const trekEndDate = getEndDate(trekStartDate, item.duration);

				console.log(trekStartDate, trekEndDate);

				return isTrekWithinQueryDateRange(
					changeDateFormat(startDate),
					changeDateFormat(endDate),
					trekStartDate,
					trekEndDate
				);
			})
			.map(transformPackageData);
	} else {
		data = packages
			.filter((item) => {
				const trekStartDate = getStartDate(item.bookingDeadline);
				const trekEndDate = getEndDate(trekStartDate, item.duration);

				return (
					item.locationId == location &&
					isTrekWithinQueryDateRange(
						changeDateFormat(startDate),
						changeDateFormat(endDate),
						trekStartDate,
						trekEndDate
					)
				);
			})
			.map(transformPackageData);
	}

	res.status(200).json(data);
};

export { getTreks };
