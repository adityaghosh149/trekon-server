const changeDateFormat = (date) => {
	if (typeof date !== "string" || !date.includes("-"))
		throw new Error("Invalid date format");

	const parts = date.split("-");
	if (parts.length !== 3)
		throw new Error("Date must be in the format YYYY-MM-DD");

	return parts.reverse().join("-");
};

export default changeDateFormat;
