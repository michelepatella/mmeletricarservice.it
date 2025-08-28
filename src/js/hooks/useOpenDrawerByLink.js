import { useEffect } from "react";
import { onUsedCarDrawerOpen } from "../logic/handling/usedCarDrawerHandler";

/**
 * Custom hook to check if the URL
 * corresponds to a used car's drawer that must be open.
 * In this way, a used car drawer can be also open externally.
 * @param setIsDrawerOpen
 * @param id
 */
export const useOpenDrawerByLink = (
	setIsDrawerOpen,
	id
) => {
	useEffect(() => {
		// Requested rejected in case of
		// undefined or null id
		if (!id) return;

		// Get the path of the URL
		const path = window.location.pathname;

		// Extrapolate the used car's ID specified by the path
		const carIdMatch = path.match(/^\/used-cars(\d+)$/);

		// If an ID has been found in the path
		if (carIdMatch) {
			const carId = carIdMatch[1];

			// Check if the current used car's ID has the request ID
			// to open the corresponding drawer
			if (id === carId)
				onUsedCarDrawerOpen(setIsDrawerOpen, carId);
		}
	}, [setIsDrawerOpen, id]);
};
