import pLimit from "p-limit";
import { SentryNode } from "../utils/setup.js";
import {
  NO_USED_CAR_AVAILABLE_MESSAGE,
  USED_CAR_OVERVIEW_IMAGE_LIMIT,
  USED_CAR_OVERVIEW_TABLE,
} from "./const.js";
import { P_LIMIT_CONCURRENCY } from "../utils/const.js";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../src/utils/const.js";
import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";

/**
 * The following serverless function retrieves salient information
 * of all the available used cars, including:
 * - Name
 * - Price
 * - Year
 * - Mileage
 * - Fuel
 * - Status
 * Additionally, the function retrieves the first available image of 
 * the used car, used as presentation image.
 * @param req — The request from the client.
 * @param res — The response to return to the client.
 * @returns {Promise<*>} — The response data or null on error.
 */
export default async function handler(req, res) {
  try {
    // Set rate limit to avoid overwhelming the database 
    // with requests in case of a large number of used cars
    const limit = pLimit(P_LIMIT_CONCURRENCY);

    // Retrieve used cars overview information
    const usedCarsOverviewInfo = await getUsedCarData(USED_CAR_OVERVIEW_TABLE);

    // Check if any used car information is available
    if (!usedCarsOverviewInfo || usedCarsOverviewInfo.length === 0) {
      return res.status(400).json({
        error: NO_USED_CAR_AVAILABLE_MESSAGE,
        table: USED_CAR_OVERVIEW_TABLE,
      });
    }

    // Combine overview information with presentation images
    // (first image of each used car)
    const usedCarsOverviewInfoWithImages = await Promise.all(
      usedCarsOverviewInfo.map((car) =>
        limit(async () => {
          const images = await getUsedCarImages(car.id, USED_CAR_OVERVIEW_IMAGE_LIMIT).catch(() => []);
          return {
            ...car,
            image: images?.[0] || null,
            fieldsCount: Object.keys(car).length,
            filledFieldsCount: Object.values(car).filter((v) => v !== null && v !== "").length,
          };
        })
      )
    );

    // Return retrieved data
    res.status(200).json({
      used_cars_overview: usedCarsOverviewInfoWithImages,
    });
  } catch (error) {
    // Log error with Sentry
    SentryNode.logger.error(error, {
      endpoint: "/api/" + USED_CARS_OVERVIEW_ENDPOINT,
      requestQuery: req.query,
      requestBody: req.body,
    });
    await SentryNode.flush(500);
    res.status(500).json({
      error: error.message,
    });
  }
}
