import {
	COMFORT_AND_INTERIOR_TABLE,
	EMISSIONS_AND_CONSUMPTION_TABLE,
	ENGINE_AND_PERFORMANCE_TABLE,
	EXTERIOR_TABLE,
} from "./const.js";
import {
	API_FOLDER_PATH,
	USED_CAR_INFO_ENDPOINT,
} from "../../src/utils/const";
import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";
import { Sentry } from "../utils/setup";

/**
 * The following API retrieves all the information and images
 * stored for a requested used car. The information retrieved include:
 * - Engine and Performance
 * - Emissions and Consumption
 * - Exterior
 * - Comfort and Interior
 * While all the information is retrieved by running a query
 * over the corresponding column, the images are retrieved from the
 * storage bucket.
 * @param req — The request from the client.
 * @param res — The response to return to the client.
 * @returns {Promise<*>} — The response data or null on error.
 */
export default async function handler(req, res) {
	try {
		// Read the id of the used car for which
		// to retrieve information
		const { id } = req.query;

		Sentry.setTag(
			"endpoint",
			API_FOLDER_PATH + USED_CAR_INFO_ENDPOINT
		);
		Sentry.setContext("request", {
			method: req.method,
			headers: req.headers,
			query: req.query,
			body: req.body,
		});

		const globalStartTime = Date.now();
		let startTime = Date.now();

		// Retrieve engine and performance data
		const enginePerformance = await getUsedCarData(
			ENGINE_AND_PERFORMANCE_TABLE,
			id
		);
		let durationMs = Date.now() - startTime;

		Sentry.logger.info(
			"Used car engine and performance data retrieved",
			{
				id: id,
				table: ENGINE_AND_PERFORMANCE_TABLE,
				fieldsCount: Object.keys(enginePerformance).length,
				filledFieldsCount: Object.values(
					enginePerformance
				).filter((v) => v !== null && v !== "").length,
				durationMs: durationMs,
			}
		);

		// Check whether no data has been found
		if (!enginePerformance) {
			Sentry.logger.warn(
				"No engine and performance data found",
				{
					id: id,
					table: ENGINE_AND_PERFORMANCE_TABLE,
				}
			);
		}

		startTime = Date.now();
		// Retrieve emissions and consumptions data
		const emissionsConsumption = await getUsedCarData(
			EMISSIONS_AND_CONSUMPTION_TABLE,
			id
		);
		durationMs = Date.now() - startTime;

		Sentry.logger.info(
			"Used car emissions and consumption data retrieved",
			{
				id: id,
				table: EMISSIONS_AND_CONSUMPTION_TABLE,
				fieldsCount: Object.keys(emissionsConsumption)
					.length,
				filledFieldsCount: Object.values(
					emissionsConsumption
				).filter((v) => v !== null && v !== "").length,
				durationMs: durationMs,
			}
		);

		// Check whether no data has been found
		if (!emissionsConsumption) {
			Sentry.logger.warn(
				"No emissions and consumption data found",
				{
					id: id,
					table: EMISSIONS_AND_CONSUMPTION_TABLE,
				}
			);
		}

		startTime = Date.now();
		// Retrieve exterior data
		const exterior = await getUsedCarData(
			EXTERIOR_TABLE,
			id
		);
		durationMs = Date.now() - startTime;

		Sentry.logger.info("Used car exterior data retrieved", {
			id: id,
			table: EXTERIOR_TABLE,
			fieldsCount: Object.keys(exterior).length,
			filledFieldsCount: Object.values(exterior).filter(
				(v) => v !== null && v !== ""
			).length,
			durationMs: durationMs,
		});

		// Check whether no data has been found
		if (!exterior) {
			Sentry.logger.warn("No exterior data found", {
				id: id,
				table: EXTERIOR_TABLE,
			});
		}

		startTime = Date.now();
		// Retrieve comfort and interior data
		const comfortInterior = await getUsedCarData(
			COMFORT_AND_INTERIOR_TABLE,
			id
		);
		durationMs = Date.now() - startTime;

		Sentry.logger.info(
			"Used car comfort and interior data retrieved",
			{
				id: id,
				table: COMFORT_AND_INTERIOR_TABLE,
				fieldsCount: Object.keys(comfortInterior).length,
				filledFieldsCount: Object.values(
					comfortInterior
				).filter((v) => v !== null && v !== "").length,
				durationMs: durationMs,
			}
		);

		// Check whether no data has been found
		if (!comfortInterior) {
			Sentry.logger.warn(
				"No comfort and interior data found",
				{
					id: id,
					table: COMFORT_AND_INTERIOR_TABLE,
				}
			);
		}

		startTime = Date.now();
		// Retrieve all the images of the used car
		const imageUrls = await getUsedCarImages(id);
		durationMs = Date.now() - startTime;

		Sentry.logger.info("Used car images retrieved", {
			id: id,
			imageCount: imageUrls?.length || 0,
			durationMs: durationMs,
		});

		// Check whether no data has been found
		if (!imageUrls) {
			Sentry.logger.warn("No images found", {
				id: id,
			});
		}

		// Collect all the retrieved data together
		const usedCarInfo = {
			...enginePerformance,
			...emissionsConsumption,
			...exterior,
			...comfortInterior,
			images: imageUrls?.slice(1),
		};

		durationMs = Date.now() - globalStartTime;

		Sentry.logger.info("All used car data retrieved", {
			id: id,
			fieldsCount: Object.values(usedCarInfo).filter(
				(v) => v != null && String(v) !== ""
			).length,
			imagesCount: usedCarInfo.images?.length || 0,
			durationMs: durationMs,
		});

		// Return all the used car data
		res.status(200).json({
			used_car_info: usedCarInfo,
		});
	} catch (error) {
		// Handle errors
		Sentry.logger.error(error, {
			requestQuery: req.query,
			requestBody: req.body,
			endpoint: API_FOLDER_PATH + USED_CAR_INFO_ENDPOINT,
		});
		return res.status(400).json({
			error: error.message,
		});
	}
}
