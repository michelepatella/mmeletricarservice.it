import { supabase } from "../../setup.js";

/**
 * Method to retrieve engine and performance information
 * from the DB, reading the corresponding table.
 * @param id
 * @returns {
 * Promise<({error: true} &
 * "Received a generic string")
 * | null>
 * }
 */
export async function getEnginePerformanceData(id) {
  // Retrieve all engine and performance data
  let { data: engine_performance, enginePerformanceError } = await supabase
    .from("engine_and_performance")
    .select("*")
    .eq("id", id);

  // Check if any error occurred
  if (enginePerformanceError) {
    console.error(enginePerformanceError);
    return null;
  }

  return engine_performance?.[0] || null;
}
