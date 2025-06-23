import {supabase} from "./setup";

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

    // Retrieve all engine and performance data
    let {
      data: engine_performance,
      enginePerformanceError
    } = await supabase
        .from("engine_and_performance")
        .select("*")
        .eq("id", id);

    // Check if any error occurred
    if (enginePerformanceError) {
      console.error(enginePerformanceError);
    }

    // Retrieve all emissions and consumption data
    let {
      data: emissions_consumption,
      emissionsConsumptionError
    } = await supabase
        .from("emissions_and_consumption")
        .select("*")
        .eq("id", id);

    // Check if any error occurred
    if (emissionsConsumptionError) {
      console.error(emissionsConsumptionError);
    }

    // Retrieve all exterior data
    let {
      data: exterior,
      exteriorError
    } = await supabase
        .from("exterior")
        .select("*")
        .eq("id", id);

    // Check if any error occurred
    if (exteriorError) {
      console.error(exteriorError);
    }

    // Retrieve all comfort and interior data
    let {
      data: comfort_interior,
      comfortInteriorError
    } = await supabase
        .from("comfort_and_interior")
        .select("*")
        .eq("id", id);

    // Check if any error
    if (comfortInteriorError) {
      console.error(comfortInteriorError);
    }

    // Retrieve all the images of the car
    const {
      data: files,
      error: imagesError
    } = await supabase.storage
        .from("car-images")
        .list(id);

    let imageUrls = [];
    // If no error occurred and there's at least one image
    if (
        !imagesError &&
        files?.length > 0
    ) {
      imageUrls = files.map(
        (file) =>
          supabase.storage
              .from("car-images")
              .getPublicUrl(id + "/" + file.name)
              .data.publicUrl,
      );
    }

    // Collect all the retrieved data together
    const used_car_info = {
      ...engine_performance?.[0],
      ...emissions_consumption?.[0],
      ...exterior?.[0],
      ...comfort_interior?.[0],
      images: imageUrls,
    };

    // Return all the data about the used car
    res.status(200).json({
      used_car_info: used_car_info
    });
  } catch (error) {
    // Handle errors
    return res.status(400).json({
      error: error.message
    });
  }
}
