import { SentryNode } from "../utils/setup.js";
import {
	NO_USED_CAR_AVAILABLE_MESSAGE,
	USED_CAR_OVERVIEW_IMAGE_LIMIT,
	USED_CAR_OVERVIEW_TABLE,
} from "./const.js";
import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";

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
		SentryNode.setTag(
			"endpoint",
			"/api/used-cars-overview/usedCarsOverview"
		);
		SentryNode.setContext("request", {
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
			SentryNode.logger.warn("No overviews found", {
				endpoint:
					"/api/used-cars-overview/usedCarsOverview",
				table: USED_CAR_OVERVIEW_TABLE,
				durationMs,
			});
			await SentryNode.flush(500);
			return res.status(400).json({
				error: NO_USED_CAR_AVAILABLE_MESSAGE,
				table: USED_CAR_OVERVIEW_TABLE,
			});
		}

		SentryNode.logger.info("Overview data retrieved", {
			endpoint: "/api/used-cars-overview/usedCarsOverview",
			table: USED_CAR_OVERVIEW_TABLE,
			carsCount: usedCarsOverviewInfo.length,
			durationMs,
		});

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
						SentryNode.logger.info(
							"Presentation image retrieved",
							{
								endpoint:
									"/api/used-cars-overview/usedCarsOverview",
								carId: car.id,
								imagesCount: images.length,
							}
						);
					} else {
						SentryNode.logger.warn(
							"No presentation image found",
							{
								endpoint:
									"/api/used-cars-overview/usedCarsOverview",
								carId: car.id,
								imagesCount: 0,
							}
						);
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

		SentryNode.logger.info(
			"All presentation images retrieved",
			{
				endpoint:
					"/api/used-cars-overview/usedCarsOverview",
				carsCount: usedCarsOverviewInfoWithImages.length,
				durationMs: durationMs,
			}
		);

		const globalDurationMs = Date.now() - globalStartTime;

		SentryNode.logger.info(
			"Used cars overview retrieving completed",
			{
				endpoint:
					"/api/used-cars-overview/usedCarsOverview",
				carsCount: usedCarsOverviewInfoWithImages.length,
				globalDurationMs: globalDurationMs,
			}
		);

		// Return combined data
		res.status(200).json({
			used_cars_overview: usedCarsOverviewInfoWithImages,
		});
	} catch (error) {
		SentryNode.logger.error(error, {
			endpoint: "/api/used-cars-overview/usedCarsOverview",
			requestQuery: req.query,
			requestBody: req.body,
		});
		await SentryNode.flush(500);
		return res.status(400).json({
			error: error.message,
		});
	}
}
