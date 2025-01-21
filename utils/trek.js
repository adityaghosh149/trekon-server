import dotenv from "dotenv";
import path from "path";
import locations from "../data/locations.js";
import changeDateFormat from "./date.js";

dotenv.config();

const getLocationName = (locationId) => {
	const location = locations.find((location) => location.id === locationId);
	return location ? location.name : "Unknown Location";
};

const getSherpa = (sherpa) => ({
	name: sherpa.name,
	avatar: `${process.env.ROOT}/data/sherpa-pfp/${
		Math.floor(Math.random() * 12) + 1
	}.jpg`,
	experience: sherpa.experience,
});

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

const transformPackageData = ({
	id,
	title,
	locationId,
	duration,
	groupSizeMin,
	groupSizeMax,
	difficulty,
	price,
	bookingDeadline,
	sherpa,
	isSponsored,
}) => {
	const startDate = getStartDate(bookingDeadline);
	const endDate = getEndDate(startDate, duration);

	const randomImageNumber = Math.floor(Math.random() * 12) + 1;
	const imagePath = `${process.env.ROOT}/data/package-images/${locationId}/${randomImageNumber}.jpg`;

	return {
		id: id.toString(),
		title,
		location: getLocationName(locationId),
		duration,
		groupSizeMin,
		groupSizeMax,
		difficulty,
		startDate: changeDateFormat(startDate),
		endDate: changeDateFormat(endDate),
		price,
		image: imagePath,
		sherpa: getSherpa(sherpa),
		isSponsored,
	};
};

export { getEndDate, getStartDate, transformPackageData };
