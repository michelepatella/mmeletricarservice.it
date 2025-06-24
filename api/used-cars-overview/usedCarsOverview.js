import { getUsedCarsOverviewData } from "./getters/getUsedCarsOverviewData.js";
import { getPresentationUsedCarImage } from "./getters/getPresentationUsedCarImage.js";

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
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export default async function handler(req, res) {
  try {
    // Retrieve used cars overview information
    const usedCarsOverviewInfo = await getUsedCarsOverviewData();

    // Check if there is at least one car
    if (!usedCarsOverviewInfo) {
      return res.status(400).json({
        error: "No used car available.",
      });
    }

    // Combine retrieved used car overview information
    // with the presentation image retrieved
    const usedCarsOverviewInfoWithImages = await Promise.all(
      usedCarsOverviewInfo.map(async (car) => {
        const image = await getPresentationUsedCarImage(car.id);
        return {
          ...car,
          image,
        };
      }),
    );

    // Return combined data (overview information + presentation image)
    res.status(200).json({
      used_cars_overview: usedCarsOverviewInfoWithImages,
    });
  } catch (error) {
    // Handle errors
    console.log(error);
    return res.status(400).json({
      error: error.message,
    });
  }
}
