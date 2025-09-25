import { SentryReact } from "../index.js";
import { API_FOLDER_PATH } from "./const.js";

/**
 * Method to fetch data by making a request to a specified
 * endpoint API and extracting the JSON response (containing used car data).
 * @param endpoint — Endpoint to which the request will be sent
 * @returns {Promise<any>} — A promise resolving to the JSON
 * response from the API containing used car data.
 */
export const fetchUsedCarData = async (endpoint) => {
	try {
		const startTime = Date.now();
		// Make the request to get car's data
		const res = await fetch(API_FOLDER_PATH + endpoint);
		const durationMs = Date.now() - startTime;

		// Check the response status
		if (!res?.ok) {
			// If any error
			const errorData = await res?.json();
			SentryReact.logger.error(
				new Error(errorData?.error),
				{
					context: "Central data fetching",
					apiPath: API_FOLDER_PATH,
					endpoint: endpoint,
				}
			);
			throw new Error(errorData?.error);
		}

		// Extract data
		const data = await res.json();

		SentryReact.logger.info(
			"Central data fetching completed",
			{
				context: "Central data fetching",
				apiPath: API_FOLDER_PATH,
				endpoint: endpoint,
				status: res.status,
				fieldsCount: Object.keys(data).length,
				itemsCount: Array.isArray(data)
					? data.length
					: undefined,
				durationMs: durationMs,
			}
		);

		// Return response in JSON format
		return data;
	} catch (error) {
		// Handle errors while acquiring data
		SentryReact.logger.error(error, {
			context: "Central data fetching",
			apiPath: API_FOLDER_PATH,
			endpoint: endpoint,
		});
		throw error;
	}
};
