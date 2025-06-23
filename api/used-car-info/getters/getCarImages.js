import { supabase } from "../../setup.js";

/**
 * Method to retrieve all the image URLs of the car
 * stored in the Supabase Storage bucket.
 * @param id
 * @returns {Promise<string[]>}
 */
export async function getCarImages(id) {
    // Retrieve all images available
    const {
        data: files,
        error: imagesError,
    } = await supabase.storage
        .from("car-images")
        .list(id);

    // Check if any error occurred
    if (imagesError) {
        console.error(imagesError);
        return [];
    }

    // Check if there is at least one image
    if (!files || files.length === 0) {
        return [];
    }

    return files.map(
        (file) =>
            supabase.storage
                .from("car-images")
                .getPublicUrl(`${id}/${file.name}`)
                .data.publicUrl
    );
}