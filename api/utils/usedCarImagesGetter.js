import {
	DEFAULT_NO_LIMIT,
	USED_CAR_IMAGES_PATH,
	USED_CAR_IMAGES_STORAGE,
} from "./const.js";
import { SentryNode, supabase } from "./setup.js";

/**
 * Method to retrieve used car images from storage.
 * @param id — ID of the used car for which to retrieve image(s).
 * @param limit — Limit of images to be retrieved.
 * @returns {Promise<string[]>} — The response data or null on error.
 */
export async function getUsedCarImages(
	id,
	limit = DEFAULT_NO_LIMIT
) {
	try {
		// Retrieve used car images
		let query;
		if (limit === DEFAULT_NO_LIMIT) {
			// Retrieve all available used car images
			query = supabase.storage
				.from(USED_CAR_IMAGES_STORAGE)
				.list(id);
		} else {
			// Retrieve limited number of used car images
			query = supabase.storage
				.from(USED_CAR_IMAGES_STORAGE)
				.list(id, {
					limit: limit,
				});
		}

		// Run query
		const { data: usedCarImages, error } = await query;
		if (error) throw error;

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
		// Log error with Sentry
		SentryNode.logger.error(error, {
			carId: id,
			limit: limit,
			storage: USED_CAR_IMAGES_STORAGE,
		});
		await SentryNode.flush(500);
		return null;
	}
}
