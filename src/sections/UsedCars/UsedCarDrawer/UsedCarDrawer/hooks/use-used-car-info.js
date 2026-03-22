import { useQuery } from "@tanstack/react-query";
import { SentryReact } from "../../../../../index.js";
import { DATA_STALE_TIME } from "../../../const.js";
import { USED_CAR_INFO_API_KEY } from "../const.js";
import { USED_CAR_INFO_ENDPOINT } from "../../../../../utils/const.js";
import { fetchUsedCarData } from "../../../../../utils/data-fetcher.js";

/**
 * Custom hook to orchestrate used car info fetching, by
 * leveraging useQuery to fetch data and extracting data
 * to pass to the component that has sent the request.
 * @param usedCarId — Used car ID for which data must be retrieved.
 * @returns {{
 * isLoading: boolean, // True if data is loading, false otherwise
 * usedCarInfo: ({images: string[]}|null) // All the used car data retrieved
 * }}
 */
export const useUsedCarInfo = ({ usedCarId }) => {
	// useQuery to fetch used car info for a
	// specific used car
	const { data, isLoading, isError, isFetching } = useQuery(
		{
			queryKey: [USED_CAR_INFO_API_KEY, usedCarId],
			queryFn: () =>
				fetchUsedCarData(
					USED_CAR_INFO_ENDPOINT + "?id=" + usedCarId
				),
			enabled: !!usedCarId,
			staleTime: DATA_STALE_TIME,
		}
	);

	// Keep track of fetching status
	if (isFetching && !isLoading) {
		SentryReact.logger.info(
			USED_CAR_INFO_API_KEY + " called",
			{
				carId: usedCarId,
				endpoint: USED_CAR_INFO_ENDPOINT,
			}
		);
	}

	// Check if any error
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

	// Check whether the data retrieved is empty
	if (data?.used_car_info) {
		SentryReact.logger.info(
			USED_CAR_INFO_API_KEY + " data fetching completed",
			{
				carId: usedCarId,
				endpoint: USED_CAR_INFO_ENDPOINT,
				fieldsRetrieved: Object.keys(data.used_car_info)
					.length,
				imagesCount: data.used_car_info.images?.length || 0,
			}
		);
	} else {
		SentryReact.logger.warn(
			USED_CAR_INFO_API_KEY +
				" data fetching completed but empty",
			{
				carId: usedCarId,
				endpoint: USED_CAR_INFO_ENDPOINT,
			}
		);
	}

	return {
		usedCarInfo: data?.used_car_info || null,
		isLoading,
	};
};
