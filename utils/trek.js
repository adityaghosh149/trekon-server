import locations from "../data/locations.js";
import changeDateFormat from "./date.js";

const getLocationName = (locationId) => {
	const location = locations.find((location) => location.id === locationId);
	return location ? location.name : "Unknown Location";
};

const getSherpa = (sherpa) => ({
	name: sherpa.name,
	avatar: sherpa.avatar,
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
	coverImage,
	bookingDeadline,
	sherpa,
	isSponsored,
}) => {
	const startDate = getStartDate(bookingDeadline);
	const endDate = getEndDate(startDate, duration);

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
		image: coverImage,
		sherpa: getSherpa(sherpa),
		isSponsored,
	};
};

export { getEndDate, getStartDate, transformPackageData };
