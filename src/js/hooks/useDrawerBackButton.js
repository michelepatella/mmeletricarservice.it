import { useEffect } from "react";
import { onUsedCarDrawerClose } from "../logic/handling/usedCarDrawerHandler";

/**
 * Custom hook to manage clicking of back button
 * of the used car drawer.
 * @param setIsDrawerOpen
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
		window.addEventListener("popstate", handleBackButton);

		// Clear the listener
		return () => {
			window.removeEventListener(
				"popstate",
				handleBackButton
			);
		};
	}, [setIsDrawerOpen]);
};
