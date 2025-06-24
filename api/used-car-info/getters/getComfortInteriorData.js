import { supabase } from "../../setup.js";

/**
 * Method to retrieve comfort and interior information
 * from the DB, reading the corresponding table.
 * @param id
 * @returns {Promise<Object|null>}
 */
export async function getComfortInteriorData(id) {
  // Retrieve all comfort and interior data
  const { data: comfort_interior, error: comfortInteriorError } = await supabase
    .from("comfort_and_interior")
    .select("*")
    .eq("id", id);

  // Check if any error occurred
  if (comfortInteriorError) {
    console.error(comfortInteriorError);
    return null;
  }

  return comfort_interior?.[0] || null;
}
