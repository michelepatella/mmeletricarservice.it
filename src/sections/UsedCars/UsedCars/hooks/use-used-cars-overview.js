import { useQuery } from "@tanstack/react-query";
import { SentryReact } from "../../../../index.js";
import { DATA_STALE_TIME } from "../../const.js";
import { USED_CARS_OVERVIEW_API_KEY } from "../const.js";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../../../utils/const.js";
import { fetchData } from "../../../../utils/data-fetcher/data-fetcher.js";

/**
 * Custom hook to fetch the overview list of used cars, by
 * leveraging useQuery to fetch data and extracting data
 * to pass to the component that has sent the request.
 * @returns {{
 *   usedCarsOverview: Array, // Used cars overview data retrieved
 *   isLoading: boolean, // True if data is loading, false otherwise
 * }}
 */
export const useUsedCarsOverview = () => {
	// useQuery to fetch all used
	// car overview information
	const { data, isLoading, isError, isFetching } = useQuery(
		{
			queryKey: [USED_CARS_OVERVIEW_API_KEY],
			queryFn: () =>
				fetchData(USED_CARS_OVERVIEW_ENDPOINT),
			staleTime: DATA_STALE_TIME,
		}
	);

	// Keep track of fetching status
	if (isFetching && !isLoading) {
		SentryReact.logger.info(
			USED_CARS_OVERVIEW_API_KEY + " called",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);
	}

	// Check if any error
	if (isError)
		SentryReact.logger.error(
			"Error while fetching " +
				USED_CARS_OVERVIEW_API_KEY +
				" data",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);

	// Check whether the data retrieved is empty
	if (data?.used_cars_overview) {
		SentryReact.logger.info(
			USED_CARS_OVERVIEW_API_KEY +
				" data fetching completed",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);
	} else {
		SentryReact.logger.warn(
			USED_CARS_OVERVIEW_API_KEY +
				" data fetching completed but empty",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);
	}

	return {
		usedCarsOverview: data?.used_cars_overview || [],
		isLoading,
	};
};
