import { supabase } from "../../setup.js";

/**
 * Method to retrieve emissions and consumption information
 * from the DB, reading the corresponding table.
 * @param id
 * @returns {Promise<Object|null>}
 */
export async function getEmissionsConsumptionData(id) {
  // Retrieve all emissions and consumptions data
  const { data: emissions_consumption, error: emissionsConsumptionError } =
    await supabase.from("emissions_and_consumption").select("*").eq("id", id);

  // Check if any error occurred
  if (emissionsConsumptionError) {
    console.error(emissionsConsumptionError);
    return null;
  }

  return emissions_consumption?.[0] || null;
}
