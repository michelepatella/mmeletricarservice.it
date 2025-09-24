import {
	NO_USED_CAR_AVAILABLE_MESSAGE,
	USED_CAR_OVERVIEW_IMAGE_LIMIT,
	USED_CAR_OVERVIEW_TABLE,
} from "./const.js";
import {
	API_FOLDER_PATH,
	USED_CARS_OVERVIEW_ENDPOINT,
} from "../../src/utils/const";
import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";
import { Sentry } from "../utils/setup";

/**
 * The following API retrieves salient information
 * of all the available used cars, for showing it via used cards
 * in the proper section. The salient information retrieved includes:
 * - Name
 * - Price
 * - Year
 * - Mileage
 * - Fuel
 * - Status
 * Additionally, the API retrieves the first available image of the used
 * car, used as presentation image.
 * @param req — The request from the client.
 * @param res — The response to return to the client.
 * @returns {Promise<*>} — The response data or null on error.
 */
export default async function handler(req, res) {
	try {
		Sentry.setTag(
			"endpoint",
			API_FOLDER_PATH + USED_CARS_OVERVIEW_ENDPOINT
		);
		Sentry.setContext("request", {
			method: req.method,
			headers: req.headers,
			query: req.query,
			body: req.body,
		});

		const globalStartTime = Date.now();
		let startTime = Date.now();

		// Retrieve used cars overview information
		const usedCarsOverviewInfo = await getUsedCarData(
			USED_CAR_OVERVIEW_TABLE
		);
		let durationMs = Date.now() - startTime;

		if (
			!usedCarsOverviewInfo ||
			usedCarsOverviewInfo.length === 0
		) {
			Sentry.logger.warn(
				"No used car overview information found",
				{
					table: USED_CAR_OVERVIEW_TABLE,
					durationMs,
				}
			);

			return res.status(400).json({
				error: NO_USED_CAR_AVAILABLE_MESSAGE,
			});
		}

		Sentry.logger.info(
			"Used car overview information retrieved",
			{
				table: USED_CAR_OVERVIEW_TABLE,
				carsCount: usedCarsOverviewInfo.length,
				durationMs,
			}
		);

		// Combine overview information with presentation images
		startTime = Date.now();
		const usedCarsOverviewInfoWithImages =
			await Promise.all(
				usedCarsOverviewInfo.map(async (car) => {
					const images = await getUsedCarImages(
						car.id,
						USED_CAR_OVERVIEW_IMAGE_LIMIT
					);
					// Show an info message if there is
					// at least one car, show a warning
					// message otherwise
					if (images && images.length > 0) {
						Sentry.logger.info("Used car image retrieved", {
							carId: car.id,
							imageCount: images.length,
						});
					} else {
						Sentry.logger.warn("No used car image found", {
							carId: car.id,
							imageCount: 0,
						});
					}
					return {
						...car,
						image: images?.[0] || null,
						fieldsCount: Object.keys(car).length,
						filledFieldsCount: Object.values(car).filter(
							(v) => v !== null && v !== ""
						).length,
					};
				})
			);
		durationMs = Date.now() - startTime;

		Sentry.logger.info("All used car images retrieved", {
			carsCount: usedCarsOverviewInfoWithImages.length,
			durationMs: durationMs,
			endpoint:
				API_FOLDER_PATH + USED_CARS_OVERVIEW_ENDPOINT,
		});

		const globalDurationMs = Date.now() - globalStartTime;

		Sentry.logger.info(
			"All used cars overview information retrieved",
			{
				carsCount: usedCarsOverviewInfoWithImages.length,
				globalDurationMs: globalDurationMs,
			}
		);

		// Return combined data
		res.status(200).json({
			used_cars_overview: usedCarsOverviewInfoWithImages,
		});
	} catch (error) {
		Sentry.logger.error(error, {
			requestQuery: req.query,
			requestBody: req.body,
			endpoint:
				API_FOLDER_PATH + USED_CARS_OVERVIEW_ENDPOINT,
		});
		return res.status(400).json({
			error: error.message,
		});
	}
}
