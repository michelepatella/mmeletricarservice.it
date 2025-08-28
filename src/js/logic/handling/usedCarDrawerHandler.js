let previousScrollY = 0;

/**
 * Method to call when the user car drawer
 * is going to be open.
 * @param setIsDrawerOpen
 * @param id
 */
export const onUsedCarDrawerOpen = (
	setIsDrawerOpen,
	id
) => {
	// Set the drawer open
	setIsDrawerOpen(true);

	// Save the current scroll position
	previousScrollY = window.scrollY;

	// Make the menu hidden and the page not scrollable
	document.body.classList.add("drawer-open");
	document.documentElement.style.overflow = "hidden";
	document.body.style.overflow = "hidden";
	document.body.style.position = "fixed";
	document.body.style.top = "-" + previousScrollY + "px";
	document.body.style.width = "100%";

	// Change the link dynamically
	window.history.pushState(
		{ id: id },
		"",
		"used-cars" + id
	);
};

/**
 * Method to call when the user car drawer
 * is going to be closed.
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
	// Set the drawer closed
	setIsDrawerOpen(false);

	// Make the menu visible and the page scrollable
	document.body.classList.remove("drawer-open");
	document.documentElement.style.overflow = "auto";
	document.body.style.overflow = "auto";
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
	window.history.replaceState({}, "", "/");
};
