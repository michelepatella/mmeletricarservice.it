import { useQuery } from "@tanstack/react-query";
import { SentryReact } from "../../../../../../index.js";
import { DATA_STALE_TIME } from "../../../../const.js";
import { USED_CAR_INFO_API_KEY } from "../../const.js";
import { USED_CAR_INFO_ENDPOINT } from "../../../../../../utils/const.js";
import { fetchData } from "../../../../../../utils/data-fetcher/data-fetcher.js";

/**
 * Custom hook to retrieve used car data, leveraging useQuery for
 * fetching it.
 * @param usedCarId — Used car ID for which data must be retrieved.
 * @returns {{
 * isLoading: boolean, // True if data is loading, false otherwise
 * usedCarInfo: ({images: string[]}|null) // All the used car data retrieved
 * }}
 */
export const useUsedCarInfo = ({ usedCarId }) => {
	// useQuery to fetch used car data
	const { data, isLoading, isError } = useQuery({
		queryKey: [USED_CAR_INFO_API_KEY, usedCarId],
		queryFn: () =>
			fetchData(
				USED_CAR_INFO_ENDPOINT + "?id=" + usedCarId
			),
		enabled: !!usedCarId,
		staleTime: DATA_STALE_TIME,
	});

	// Check for errors during data fetching
	if (isError)
		SentryReact.logger.error(
			"Error while fetching " +
				USED_CAR_INFO_API_KEY +
				" data",
			{
				carId: usedCarId,
				endpoint: USED_CAR_INFO_ENDPOINT,
			}
		);

	return {
		usedCarInfo: data?.used_car_info || null,
		isLoading,
	};
};
