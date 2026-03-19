import {
	DEFAULT_FIELDS,
	ID_FIELD,
	DEFAULT_NO_ID,
	DEFAULT_NO_LIMIT,
} from "../const.js";
import { SentryNode, supabase } from "../setup.js";

/**
 * Method to retrieve all the data for a specific used
 * car from a given DB table.
 * @param table — Name of the table from which to retrieve data.
 * @param id — ID of the used car for which to retrieve data.
 * @param fields — Fields of the table to be retrieved.
 * @param limit — Maximum number of records to retrieve.
 * @returns {Promise<Object|Object[]|null>} — Resolves with
 * record(s) or null on error.
 */
export async function getUsedCarData(
	table,
	id = DEFAULT_NO_ID,
	fields = DEFAULT_FIELDS,
	limit = DEFAULT_NO_LIMIT
) {
	try {
		// Retrieve used car data from a given table,
		// reading only the specified fields and applying
		// the specified limit
		let query;
		if (id === DEFAULT_NO_ID) {
			// For all the used cars
			query = supabase.from(table).select(fields);
		} else {
			// For a specific used car
			query = supabase
				.from(table)
				.select(fields)
				.eq(ID_FIELD, id);
		}

		// Limit the number of records retrieved if a limit
		// is specified
		if (limit !== DEFAULT_NO_LIMIT) {
			query = query.limit(limit);
		}

		// Run query
		const { data: usedCarData, error } = await query;
		if (error) throw error;

		// Return data retrieved
		return id === DEFAULT_NO_ID
			? usedCarData
			: usedCarData?.[0] || null;
	} catch (error) {
		// Log error with Sentry
		SentryNode.logger.error(error, {
			carId: id,
			table: table,
			fields: fields,
			limit: limit,
		});
		await SentryNode.flush(500);
		return null;
	}
}
