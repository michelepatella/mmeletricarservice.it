import { useEffect } from "react";
import { SentryReact } from "../../../../../index.js";
import { onUsedCarDrawerClose } from "../../../handler/handler.js";

/**
 * Custom hook to manage the back button clicking
 * within the used car drawer.
 * @param setIsDrawerOpen — State setter to keep track
 * whether the used car drawer is open or not.
 */
export const useDrawerBackButtonHandler = (
	setIsDrawerOpen
) => {
	useEffect(() => {
		try {
			// Add a listener for popstate
			/* eslint-disable-next-line no-undef */
			const handler = () => {
				onUsedCarDrawerClose(setIsDrawerOpen);
			};

			globalThis.addEventListener("popstate", handler);
		} catch (error) {
			SentryReact.logger.error(error, {
				context:
					"Register popstate listener for drawer back button",
			});
		}

		// Clear the listener
		return () => {
			try {
				/* eslint-disable-next-line no-undef */
				const handler = () => {
					onUsedCarDrawerClose(setIsDrawerOpen);
				};

				globalThis.removeEventListener("popstate", handler);
			} catch (error) {
				SentryReact.logger.error(error, {
					context:
						"Remove popstate listener for drawer back button",
				});
			}
		};
	}, [setIsDrawerOpen]);
};
