import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../utils/const";
import { fetchUsedCarData } from "../utils/fetcher";

/**
 * Custom hook to fetch the overview list of used cars, by
 * leveraging useQuery to fetch data and extracting data
 * to pass to the component that has sent the request.
 * @returns {{
 *   usedCarsOverview: Array,
 *   isLoading: boolean,
 *   isError: boolean
 * }}
 */
export const useUsedCarsOverview = () => {
	// useQuery to fetch all used
	// car overview information
	const { data, isLoading, isError } = useQuery({
		queryKey: ["usedCarsOverview"],
		queryFn: () =>
			fetchUsedCarData(
				"used-cars-overview/usedCarsOverview"
			),
		staleTime: STALE_TIME,
	});

	// Check if any error
	if (isError)
		console.error(
			"Error while fetching used cars overview data."
		);

	return {
		usedCarsOverview: data?.used_cars_overview || [],
		isLoading,
	};
};
