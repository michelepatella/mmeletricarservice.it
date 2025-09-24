import {
	USED_CAR_DRAWER_OPEN_CLASS_NAME,
	USED_CAR_DRAWER_URL,
	USED_CAR_DRAWER_WIDTH,
} from "./const";
import { Sentry } from "../../index";

let previousScrollY = 0;

/**
 * Method to call when the user car drawer
 * is going to be open.
 * @param setIsDrawerOpen — State setter keeping track
 * whether the used car drawer is open or not.
 * @param id — ID of the used car which drawer is open.
 */
export const onUsedCarDrawerOpen = (
	setIsDrawerOpen,
	id
) => {
	try {
		// Set the drawer open
		setIsDrawerOpen(true);

		// Save the current scroll position
		previousScrollY = window.scrollY;

		// Make the Menu hidden and the page not scrollable
		document.body.classList.add(
			USED_CAR_DRAWER_OPEN_CLASS_NAME
		);
		document.documentElement.style.overflow =
			"var(--overflow-hidden)";
		document.body.style.overflow = "var(--overflow-hidden)";
		document.body.style.position = "var(--position-fixed)";
		document.body.style.top = "-" + previousScrollY + "px";
		document.body.style.width = USED_CAR_DRAWER_WIDTH;

		// Change the link dynamically
		/* eslint-disable-next-line no-undef */
		globalThis.history.pushState(
			{ id: id },
			"",
			USED_CAR_DRAWER_URL + id
		);
		Sentry.logger.info("Used car drawer opened", {
			carId: id,
		});
	} catch (error) {
		Sentry.logger.error(error, {
			context: "Open used car drawer",
			carId: id,
		});
	}
};

/**
 * Method to call when the user car drawer
 * is going to be closed.
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
	try {
		// Set the drawer closed
		setIsDrawerOpen(false);

		// Make the Menu visible and the page scrollable
		document.body.classList.remove(
			USED_CAR_DRAWER_OPEN_CLASS_NAME
		);
		document.documentElement.style.overflow =
			"var(--overflow-auto)";
		document.body.style.overflow = "var(--overflow-auto)";
		document.body.style.position = "";
		document.body.style.top = "";
		document.body.style.width = "";

		// Restore scroll position
		window.scrollTo({
			top: previousScrollY,
			left: 0,
			behavior: "instant",
		});

		// Redirect the user to the used cars page
		/* eslint-disable-next-line no-undef */
		globalThis.history.replaceState({}, "", "/");
		Sentry.logger.info("Used car drawer closed");
	} catch (error) {
		Sentry.logger.error(error, {
			context: "Close used car drawer",
		});
	}
};
