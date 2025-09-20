import {
	COMFORT_AND_INTERIOR_TABLE,
	EMISSIONS_AND_CONSUMPTION_TABLE,
	ENGINE_AND_PERFORMANCE_TABlE,
	EXTERIOR_TABLE,
} from "./const.js";
import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";

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

		// Retrieve engine and performance data
		const enginePerformance = await getUsedCarData(
			ENGINE_AND_PERFORMANCE_TABlE,
			id
		);

		// Retrieve emissions and consumptions data
		const emissionsConsumption = await getUsedCarData(
			EMISSIONS_AND_CONSUMPTION_TABLE,
			id
		);

		// Retrieve exterior data
		const exterior = await getUsedCarData(
			EXTERIOR_TABLE,
			id
		);

		// Retrieve comfort and interior data
		const comfortInterior = await getUsedCarData(
			COMFORT_AND_INTERIOR_TABLE,
			id
		);

		// Retrieve all the images of the used car
		const imageUrls = await getUsedCarImages(id);

		// Collect all the retrieved data together
		const usedCarInfo = {
			...enginePerformance,
			...emissionsConsumption,
			...exterior,
			...comfortInterior,
			images: imageUrls,
		};

		// Return all the used car data
		res.status(200).json({
			used_car_info: usedCarInfo,
		});
	} catch (error) {
		// Handle errors
		console.log(error);
		return res.status(400).json({
			error: error.message,
		});
	}
}
