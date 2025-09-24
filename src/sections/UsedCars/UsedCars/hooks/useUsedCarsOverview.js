import { useQuery } from "@tanstack/react-query";
import { DATA_STALE_TIME } from "../../const";
import { USED_CARS_OVERVIEW_API_KEY } from "../const";
import { fetchUsedCarData } from "../../../../utils/dataFetcher";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../../../utils/const";
import { Sentry } from "../../../../index";

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
		Sentry.logger.info(
			"Fetching used cars overview started"
		);
	}

	// Check if any error
	if (isError)
		Sentry.logger.error(
			"Error while fetching used cars overview"
		);

	// Check whether the data retrieved is empty
	if (data?.used_cars_overview) {
		Sentry.logger.info("Used cars overview fetched", {
			count: data.used_cars_overview.length,
		});
	} else {
		Sentry.logger.warn(
			"Used cars overview fetched but empty"
		);
	}

	return {
		usedCarsOverview: data?.used_cars_overview || [],
		isLoading,
	};
};
