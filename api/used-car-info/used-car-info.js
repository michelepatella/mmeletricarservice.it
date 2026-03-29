import { SentryNode } from "../utils/setup.js";
import {
	COMFORT_AND_INTERIOR_TABLE,
	EMISSIONS_AND_CONSUMPTION_TABLE,
	ENGINE_AND_PERFORMANCE_TABLE,
	EXTERIOR_TABLE,
} from "./const.js";
import { API_FOLDER_PATH } from "../utils/const.js";
import { USED_CAR_INFO_ENDPOINT } from "./const.js";
import { getUsedCarImages } from "../utils/getters/used-car-images-getter.js";
import { getUsedCarData } from "../utils/getters/used-cars-data-getter.js";

/**
 * The following serverless function retrieves all the information and images
 * stored for a specific used car. The information retrieved include:
 * - Engine and Performance
 * - Emissions and Consumption
 * - Exterior
 * - Comfort and Interior
 * @param req — The request from the client.
 * @param res — The response to return to the client.
 * @returns {Promise<*>} — The response data or null on error.
 */
export default async function usedCarInfoHandler(req, res) {
	try {
		// Read the id of the used car for which
		// to retrieve information
		const { id } = req.query;

		// Retrieve all the used car information in parallel
		const [
			enginePerformance,
			emissionsConsumption,
			exterior,
			comfortInterior,
			imageUrls,
		] = await Promise.all([
			getUsedCarData(
				ENGINE_AND_PERFORMANCE_TABLE,
				id
			).catch(() => ({})),
			getUsedCarData(
				EMISSIONS_AND_CONSUMPTION_TABLE,
				id
			).catch(() => ({})),
			getUsedCarData(EXTERIOR_TABLE, id).catch(() => ({})),
			getUsedCarData(COMFORT_AND_INTERIOR_TABLE, id).catch(
				() => ({})
			),
			getUsedCarImages(id).catch(() => []),
		]);

		// Collect all the retrieved data together
		const usedCarInfo = {
			...enginePerformance,
			...emissionsConsumption,
			...exterior,
			...comfortInterior,
			images: imageUrls?.slice(1),
		};

		// Return all the used car data
		res.status(200).json({
			used_car_info: usedCarInfo,
		});
	} catch (error) {
		// Log error with Sentry
		SentryNode.logger.error(error, {
			endpoint: API_FOLDER_PATH + USED_CAR_INFO_ENDPOINT,
			requestQuery: req.query,
			requestBody: req.body,
		});
		await SentryNode.flush(500);
		res.status(500).json({
			error: error.message,
		});
	}
}
