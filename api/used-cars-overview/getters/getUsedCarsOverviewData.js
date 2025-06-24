import { supabase } from "../../setup.js";

/**
 * Method to retrieve all used cars overview information
 * from the DB, including name, price, year, mileage,
 * fuel type, and status.
 * @returns {Promise<array|null>}
 */
export async function getUsedCarsOverviewData() {
  // Retrieve used cars overview information
  const { data, error } = await supabase.from("used_car").select("*");

  // Check if any error occurred
  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
