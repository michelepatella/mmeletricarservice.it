import { useQuery } from "@tanstack/react-query";
import {
	STALE_TIME,
	USED_CAR_INFO_KEY,
} from "../utils/const";
import { USED_CAR_INFO_ENDPOINT } from "../utils/internal_links";
import { fetchUsedCarData } from "../utils/fetcher";

/**
 * Custom hook to orchestrate used car info fetching, by
 * leveraging useQuery to fetch data and extracting data
 * to pass to the component that has sent the request.
 * @param usedCarId
 * @returns {{isLoading: boolean, usedCarInfo: ({images: string[]}|null)}}
 */
export const useUsedCarInfo = ({ usedCarId }) => {
	// useQuery to fetch used car info for a
	// specific used car
	const { data, isLoading, isError } = useQuery({
		queryKey: [USED_CAR_INFO_KEY, usedCarId],
		queryFn: () =>
			fetchUsedCarData(
				USED_CAR_INFO_ENDPOINT + "?id=" + usedCarId
			),
		enabled: !!usedCarId,
		staleTime: STALE_TIME,
	});

	// Check if any error
	if (isError)
		console.error("Error while fetching used car data.");

	return {
		usedCarInfo: data?.used_car_info || null,
		isLoading,
	};
};
