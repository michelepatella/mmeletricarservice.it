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
 * @param id
 * @param table
 * @param fields
 * @returns {Promise<({error: true} & "Received a generic string")|null>}
 */
export async function getUsedCarData(
	table,
	id = DEFAULT_NO_ID,
	fields = DEFAULT_FIELDS
) {
	let query;

	// Build query dynamically
	if (id !== null) {
		// Retrieve used car data for a specific
		// car from a given table, reading only the
		// specified fields
		query = supabase
			.from(table)
			.select(fields)
			.eq(DEFAULT_ID_FIELD, id);
	} else {
		// Retrieve used car data for all the existing
		// cars from a given table, reading only the
		// specified fields
		query = supabase.from(table).select(fields);
	}

	// Run query
	const { data: usedCarData, error } = await query;

	// Check if any error occurred
	if (error) {
		console.error(error);
		return null;
	}

	return id !== null
		? usedCarData?.[0] || null
		: usedCarData;
}
