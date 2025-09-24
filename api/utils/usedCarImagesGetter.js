import {
	DEFAULT_NO_LIMIT,
	USED_CAR_IMAGES_PATH,
	USED_CAR_IMAGES_STORAGE,
} from "./const.js";
import { SentryNode, supabase } from "./setup.js";

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
	try {
		let query;

		// Build query dynamically
		if (limit === DEFAULT_NO_LIMIT) {
			// Retrieve all the used car images
			// (no limit specified)
			query = supabase.storage
				.from(USED_CAR_IMAGES_STORAGE)
				.list(id);
		} else {
			// Retrieve only requested used car images
			// (based on the specified limit)
			query = supabase.storage
				.from(USED_CAR_IMAGES_STORAGE)
				.list(id, {
					limit: limit,
				});
		}

		// Run query
		const { data: usedCarImages, error } = await query;

		// Check if any error occurred
		if (error) {
			SentryNode.logger.error(error, {
				carId: id,
				limit: limit,
				storage: USED_CAR_IMAGES_STORAGE,
			});
			return null;
		}

		if (!usedCarImages || usedCarImages.length === 0) {
			SentryNode.logger.warn("No images found", {
				carId: id,
				limit: limit,
				storage: USED_CAR_IMAGES_STORAGE,
			});
			return null;
		}

		// Show a warning message whether image limit
		// is greater than used car images available
		if (usedCarImages.length < limit) {
			SentryNode.logger.warn(
				"Requested image limit exceeds available images",
				{
					carId: id,
					requestedLimit: limit,
					availableImages: usedCarImages.length,
					storage: USED_CAR_IMAGES_STORAGE,
				}
			);
		}

		await SentryNode.flush(2000);

		// Extract and return used car image URL(s)
		return usedCarImages.map(
			(usedCarImage) =>
				supabase.storage
					.from(USED_CAR_IMAGES_STORAGE)
					.getPublicUrl(
						USED_CAR_IMAGES_PATH(id, usedCarImage.name)
					).data.publicUrl
		);
	} catch (error) {
		// Handle errors
		SentryNode.logger.error(error, {
			carId: id,
			limit: limit,
			storage: USED_CAR_IMAGES_STORAGE,
		});
		await SentryNode.flush(2000);
		return null;
	}
}
