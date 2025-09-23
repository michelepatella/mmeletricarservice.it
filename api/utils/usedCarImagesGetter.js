import {
	DEFAULT_NO_LIMIT,
	USED_CAR_IMAGES_PATH,
	USED_CAR_IMAGES_STORAGE,
} from "./const.js";
import { supabase } from "./setup.js";

/**
 * Method to retrieve used car images from Supabase
 * Storage, given a certain image limit.
 * If the specified limit is x, the method will retrieve
 * the first x used car images available. If no limit is
 * specified, the method will retrieve all the used car
 * images by default.
 * @param id — ID of the used car for which to retrieve image(s).
 * @param limit — Limit of images to be retrieved.
 * @returns {Promise<string[]>} — The response data or null on error.
 */
export async function getUsedCarImages(
	id,
	limit = DEFAULT_NO_LIMIT
) {
	let query;

	// Build query dynamically
	if (limit !== DEFAULT_NO_LIMIT) {
		// Retrieve only requested used car images
		// (based on the specified limit)
		query = supabase.storage
			.from(USED_CAR_IMAGES_STORAGE)
			.list(id, {
				limit: limit,
			});
	} else {
		// Retrieve all the used car images
		// (no limit specified)
		query = supabase.storage
			.from(USED_CAR_IMAGES_STORAGE)
			.list(id);
	}

	// Run query
	const { data: usedCarImages, error } = await query;

	// Check if any error occurred
	if (
		error ||
		!usedCarImages ||
		usedCarImages.length === 0
	) {
		console.error(error);
		return null;
	}

	// Extract and return used car image URL(s)
	return usedCarImages.map(
		(usedCarImage) =>
			supabase.storage
				.from(USED_CAR_IMAGES_STORAGE)
				.getPublicUrl(
					USED_CAR_IMAGES_PATH(id, usedCarImage.name)
				).data.publicUrl
	);
}
