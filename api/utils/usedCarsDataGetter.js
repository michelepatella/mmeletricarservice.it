import {
	DEFAULT_FIELDS,
	DEFAULT_ID_FIELD,
	DEFAULT_NO_ID,
} from "./const.js";
import { supabase } from "./setup.js";

/**
 * Method to retrieve all the used car data for a specific
 * car from a given table. Only the specified fields are
 * retrieved, or all fields if none are specified.
 * @param table — Name of the table from which to retrieve data.
 * @param id — ID of the used car for which to retrieve data.
 * @param fields — Fields of the table to be retrieved.
 * @returns {Promise<Object|Object[]|null>} — Resolves with
 * record(s) or null on error.
 */
export async function getUsedCarData(
	table,
	id = DEFAULT_NO_ID,
	fields = DEFAULT_FIELDS
) {
	let query;

	// Build query dynamically
	if (id === DEFAULT_NO_ID) {
		// Retrieve used car data for all the existing
		// cars from a given table, reading only the
		// specified fields
		query = supabase.from(table).select(fields);
	} else {
		// Retrieve used car data for a specific
		// car from a given table, reading only the
		// specified fields
		query = supabase
			.from(table)
			.select(fields)
			.eq(DEFAULT_ID_FIELD, id);
	}

	// Run query
	const { data: usedCarData, error } = await query;

	// Check if any error occurred
	if (error) {
		console.error(
			"Error fetching fields: " +
				fields +
				", from: " +
				table +
				", for used car id = " +
				id +
				": " +
				error
		);
		return null;
	}

	return id === DEFAULT_NO_ID
		? usedCarData
		: usedCarData?.[0] || null;
}
