import { getEnginePerformanceData } from "./getters/getEnginePerformanceData.js";
import { getEmissionsConsumptionData } from "./getters/getEmissionsConsumptionsData.js";
import { getExteriorData } from "./getters/getExteriorData.js";
import { getComfortInteriorData } from "./getters/getComfortInteriorData.js";
import { getCarImages } from "./getters/getCarImages.js";

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
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export default async function handler(req, res) {
	try {
		// Read the id of the used car for which
		// to retrieve information
		const { id } = req.query;

		// Retrieve engine and performance data
		const enginePerformance =
			await getEnginePerformanceData(id);

		// Retrieve emissions and consumptions data
		const emissionsConsumption =
			await getEmissionsConsumptionData(id);

		// Retrieve exterior data
		const exterior = await getExteriorData(id);

		// Retrieve comfort and interior data
		const comfortInterior =
			await getComfortInteriorData(id);

		// Retrieve all the images of the car
		const imageUrls = await getCarImages(id);

		// Collect all the retrieved data together
		const usedCarInfo = {
			...enginePerformance,
			...emissionsConsumption,
			...exterior,
			...comfortInterior,
			images: imageUrls,
		};

		// Return all the data about the used car
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
