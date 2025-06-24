import { supabase } from "../../setup.js";

/**
 * Method to retrieve exterior information
 * from the DB, reading the corresponding table.
 * @param id
 * @returns {Promise<Object|null>}
 */
export async function getExteriorData(id) {
  // Retrieve all exterior data
  const { data: exterior, error: exteriorError } = await supabase
    .from("exterior")
    .select("*")
    .eq("id", id);

  // Check if any error occurred
  if (exteriorError) {
    console.error(exteriorError);
    return null;
  }

  return exterior?.[0] || null;
}
