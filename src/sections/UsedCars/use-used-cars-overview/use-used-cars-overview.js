import { useQuery } from "@tanstack/react-query";
import { SentryReact } from "../../../index.js";
import { DATA_STALE_TIME } from "../const.js";
import { USED_CARS_OVERVIEW_API_KEY } from "../const.js";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../../utils/const.js";
import { fetchData } from "../../../utils/data-fetcher/data-fetcher.js";

/**
 * Custom hook to retrieve the used car's overview data,
 * leveraging useQuery for fetching it.
 * @returns {{
 *   usedCarsOverview: Array, // Used cars overview data retrieved
 *   isLoading: boolean, // True if data is loading, false otherwise
 * }}
 */
export const useUsedCarsOverview = () => {
	// useQuery to fetch all the used
	// car's overview information
	const { data, isLoading, isError } = useQuery({
		queryKey: [USED_CARS_OVERVIEW_API_KEY],
		queryFn: () => fetchData(USED_CARS_OVERVIEW_ENDPOINT),
		staleTime: DATA_STALE_TIME,
	});

	// Check for errors during data fetching
	if (isError)
		SentryReact.logger.error(
			"Error while fetching " +
				USED_CARS_OVERVIEW_API_KEY +
				" data",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);

	return {
		usedCarsOverview: data?.used_cars_overview || [],
		isLoading,
	};
};
