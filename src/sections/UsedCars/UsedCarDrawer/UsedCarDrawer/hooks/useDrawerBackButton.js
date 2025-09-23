import { useEffect } from "react";
import { onUsedCarDrawerClose } from "../../../handler";

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
			onUsedCarDrawerClose(setIsDrawerOpen);
		};

		// Add a listener for popstate
		/* eslint-disable-next-line no-undef */
		globalThis.addEventListener(
			"popstate",
			handleBackButton
		);

		// Clear the listener
		return () => {
			/* eslint-disable-next-line no-undef */
			globalThis.removeEventListener(
				"popstate",
				handleBackButton
			);
		};
	}, [setIsDrawerOpen]);
};
