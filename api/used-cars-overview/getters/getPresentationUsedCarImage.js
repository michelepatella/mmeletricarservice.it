import { supabase } from "../../setup.js";

/**
 * Method to retrieve the presentation image URL
 * for a given car, from the storage bucket.
 * @param {string} carId
 * @returns {Promise<string|null>}
 */
export async function getPresentationUsedCarImage(carId) {
	// Retrieve the first available used car image, used
	// as presentation car image
	const { data: files, error } = await supabase.storage
		.from("car-images")
		.list(carId, {
			limit: 1,
		});

	// Check if any error occured
	if (error || !files || files.length === 0) {
		console.error(error);
		return null;
	}

	// Get the file image
	const file = files[0];

	return supabase.storage
		.from("car-images")
		.getPublicUrl(`${carId}/${file.name}`).data.publicUrl;
}
