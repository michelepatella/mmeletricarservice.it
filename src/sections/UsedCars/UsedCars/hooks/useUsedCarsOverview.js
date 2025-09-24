import { useQuery } from "@tanstack/react-query";
import { SentryReact } from "../../../../index.js";
import { DATA_STALE_TIME } from "../../const.js";
import { USED_CARS_OVERVIEW_API_KEY } from "../const.js";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../../../utils/const.js";
import { fetchUsedCarData } from "../../../../utils/dataFetcher.js";

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
				fetchUsedCarData(USED_CARS_OVERVIEW_ENDPOINT),
			staleTime: DATA_STALE_TIME,
		}
	);

	// Keep track of fetching status
	if (isFetching && !isLoading) {
		SentryReact.logger.info(
			"Fetching used cars overview started"
		);
	}

	// Check if any error
	if (isError)
		SentryReact.logger.error(
			"Error while fetching used cars overview"
		);

	// Check whether the data retrieved is empty
	if (data?.used_cars_overview) {
		SentryReact.logger.info("Used cars overview fetched", {
			count: data.used_cars_overview.length,
		});
	} else {
		SentryReact.logger.warn(
			"Used cars overview fetched but empty"
		);
	}

	return {
		usedCarsOverview: data?.used_cars_overview || [],
		isLoading,
	};
};
