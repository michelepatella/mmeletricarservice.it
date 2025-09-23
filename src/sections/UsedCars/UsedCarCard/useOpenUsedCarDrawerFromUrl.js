import { useEffect } from "react";
import { onUsedCarDrawerOpen } from "../handler";
import { USED_CAR_DRAWER_URL } from "../const";

/**
 * Custom hook to check if the URL
 * corresponds to a used car's drawer that must be open.
 * In this way, a used car drawer can be also open externally.
 * @param setIsDrawerOpen — State setter to keep track
 * whether the used car drawer is open or not.
 * @param id — ID of the used car which drawer is open.
 */
export const useOpenUsedCarDrawerFromUrl = (
	setIsDrawerOpen,
	id
) => {
	useEffect(() => {
		// Requested rejected in case of
		// undefined or null id
		if (!id) return;

		// Get the path of the URL
		/* eslint-disable-next-line no-undef */
		const path = globalThis.location.pathname;

		// Extrapolate the used car's ID specified by the path
		const regex = new RegExp(
			String.raw`^/${USED_CAR_DRAWER_URL}(\d+)$`
		);
		const carIdMatch = regex.exec(path);

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
