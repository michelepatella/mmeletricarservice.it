import { useEffect } from "react";
import { SentryReact } from "../../../../index.js";
import { USED_CAR_DRAWER_URL } from "../../const.js";
import { onUsedCarDrawerOpen } from "../../handler/handler.js";

/**
 * Custom hook to check whether the URL corresponds to a 
 * used car's drawer that must be open.
 * @param setIsDrawerOpen — State setter to keep track
 * whether the used car drawer is open or not.
 * @param id — ID of the used car whose drawer is open.
 */
export const useOpenUsedCarDrawerFromUrl = (
	setIsDrawerOpen,
	id
) => {
	useEffect(() => {
		try {
			// Requested rejected in case of
			// undefined or null ID
			if (!id) 
				return;

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

				// Check whether the current used car's ID 
				// equals the ID requested, opening its drawer
				// consequently
				if (id === carId)
					onUsedCarDrawerOpen(setIsDrawerOpen, carId);
			}
		} catch (error) {
			// Log error with Sentry
			SentryReact.logger.error(error, {
				context: "Open used car drawer from URL",
				carId: id,
			});
		}
	}, [setIsDrawerOpen, id]);
};
