import { useEffect } from "react";
import { onUsedCarDrawerClose } from "../../../handler";
import { Sentry } from "../../../../../index";

/**
 * Custom hook to manage clicking of back button
 * of the used car drawer.
 * @param setIsDrawerOpen — State setter to keep track
 * whether the used car drawer is open or not.
 */
export const useDrawerBackButtonHandler = (
	setIsDrawerOpen
) => {
	useEffect(() => {
		/**
		 * To close the used car drawer when the
		 * back button is clicked
		 */
		const handleBackButton = () => {
			try {
				onUsedCarDrawerClose(setIsDrawerOpen);
				Sentry.logger.info(
					"Used car drawer closed via back button"
				);
			} catch (error) {
				Sentry.logger.error(error, {
					context: "Used car drawer back button",
				});
			}
		};

		try {
			// Add a listener for popstate
			/* eslint-disable-next-line no-undef */
			globalThis.addEventListener(
				"popstate",
				handleBackButton
			);
		} catch (error) {
			Sentry.logger.error(error, {
				context:
					"Register popstate listener for drawer back button",
			});
		}

		// Clear the listener
		return () => {
			try {
				/* eslint-disable-next-line no-undef */
				globalThis.removeEventListener(
					"popstate",
					handleBackButton
				);
			} catch (error) {
				Sentry.logger.error(error, {
					context:
						"Remove popstate listener for drawer back button",
				});
			}
		};
	}, [setIsDrawerOpen]);
};
