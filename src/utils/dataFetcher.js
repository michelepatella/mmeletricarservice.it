import { API_FOLDER_PATH } from "./const";

/**
 * Method to fetch data by making a request to a specified
 * endpoint API and extracting the JSON response (containing used car data).
 * @param endpoint — Endpoint to which the request will be sent
 * @returns {Promise<any>} — A promise resolving to the JSON
 * response from the API containing used car data.
 */
export const fetchUsedCarData = async (endpoint) => {
	try {
		// Make the request to get car's data
		const res = await fetch(API_FOLDER_PATH + endpoint);

		// Check the response status
		if (!res?.ok) {
			// If any error
			const errorData = await res?.json();
			console.error(
				"Error fetching data:",
				errorData?.error
			);
			throw new Error(errorData?.error);
		}

		// Return the response in JSON format
		return await res.json();
	} catch (error) {
		// Handle errors while acquiring data
		console.error("Error while fetching data:", error);
		throw error;
	}
};
