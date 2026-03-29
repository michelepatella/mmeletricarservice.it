import { SentryReact } from "../../index.js";
import { API_FOLDER_PATH } from "../const.js";

/**
 * Method to fetch data by making a request to a specified
 * endpoint and extracting the JSON response.
 * @param endpoint — Endpoint to which the request will be sent.
 * @returns {Promise<any>} — A promise resolving to the JSON
 * response from the API.
 */
export const fetchData = async (endpoint) => {
	try {
		// Make the request
		const res = await fetch(API_FOLDER_PATH + endpoint);

		// Check for any error
		if (!res?.ok) {
			const errorData = await res?.json();
			SentryReact.logger.error(
				new Error(errorData?.error),
				{
					context: "Data fetching",
					apiPath: API_FOLDER_PATH,
					endpoint: endpoint,
				}
			);
			throw new Error(errorData?.error);
		}

		// Return response in JSON format
		return await res.json();
	} catch (error) {
		// Log errors with Sentry
		SentryReact.logger.error(error, {
			context: "Data fetching",
			apiPath: API_FOLDER_PATH,
			endpoint: endpoint,
		});
		throw error;
	}
};
