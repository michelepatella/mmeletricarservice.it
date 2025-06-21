import { useEffect } from "react";
import { onUsedCarDrawerOpen } from "../logic/usedCarDrawerHandler";

/**
 * Custom hook to check if the URL corresponds to a used car's drawer
 * that must be open
 * @param setIsDrawerOpen
 * @param id
 */
export const useOpenDrawerByLink = (setIsDrawerOpen, id) => {
	useEffect(() => {
		//requested rejected in case of
		//undefined or null id
		if (!id) return;

		//get the path
		const path = window.location.pathname;

		//extrapolate the used car's id specified by the path
		const carIdMatch = path.match(/^\/used-cars(\d+)$/);

		//if an id has been found in the path
		if (carIdMatch) {
			const carId = carIdMatch[1];

			//check if the current used car's id has the request id
			//to open the corresponding drawer
			if (id === carId) onUsedCarDrawerOpen(setIsDrawerOpen, carId);
		}
	}, [setIsDrawerOpen, id]);
};
