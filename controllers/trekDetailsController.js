import dotenv from "dotenv";
import { loadEnvFile } from "process";
import packages from "../data/packages.js";
import changeDateFormat from "../utils/date.js";

dotenv.config();

const getPhotoGallery = (locationId) => {
	const numbers = new Set();
	while (numbers.size < 6) {
		const randomNumber = Math.floor(Math.random() * 12) + 1;
		numbers.add(randomNumber);
	}

	const links = Array.from(numbers).map(
		(number) =>
			`${process.env.ROOT}/data/package-images/${locationId}/${number}.jpg`
	);

	console.log(links);

	return links;
};

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
			locationId,
			description,
			groupSizeMin,
			groupSizeMax,
			difficulty,
			availableSlots,
			startingPoint,
			price,
			trekDays,
			bookingDeadline,
			sherpa,
		} = trek;

		sherpa.avatar = `${process.env.ROOT}/data/sherpa-pfp/${
			Math.floor(Math.random() * 12) + 1
		}.jpg`;

		const photo_gallery = getPhotoGallery(locationId);
		const coverImage = photo_gallery.pop();

		const data = {
			id: trekId.toString(),
			title,
			description,
			duration,
			availableSlots,
			groupSize: groupSizeMin + "-" + groupSizeMax,
			difficulty,
			startingPoint,
			bookingDeadline: changeDateFormat(bookingDeadline),
			price,
			coverImage,
			trekDays,
			sherpa,
			photo_gallery,
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
