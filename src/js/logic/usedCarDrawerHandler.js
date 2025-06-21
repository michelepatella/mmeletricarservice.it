let previousScrollY = 0;

/**
 * Method to handle when the drawer is open
 * @param setIsDrawerOpen
 * @param id
 */
export const onUsedCarDrawerOpen = (setIsDrawerOpen, id) => {
	//set the drawer open
	setIsDrawerOpen(true);

	//save the current scroll position
	previousScrollY = window.scrollY;

	//make the menu hidden and the page not scrollable
	document.body.classList.add("drawer-open");
	document.documentElement.style.overflow = "hidden";
	document.body.style.overflow = "hidden";
	document.body.style.position = "fixed";
	document.body.style.top = "-" + previousScrollY + "px";
	document.body.style.width = "100%";

	//change the link dynamically
	window.history.pushState({ id: id }, "", "used-cars" + id);
};

/**
 * Method to handle when the drawer is closed
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
	//set the drawer closed
	setIsDrawerOpen(false);

	//make the menu visible and the page scrollable
	document.body.classList.remove("drawer-open");
	document.documentElement.style.overflow = "auto";
	document.body.style.overflow = "auto";
	document.body.style.position = "";
	document.body.style.top = "";
	document.body.style.width = "";

	//restore scroll position
	window.scrollTo({
		top: previousScrollY,
		left: 0,
		behavior: "instant",
	});

	//redirect the user to the used cars page
	window.history.replaceState({}, "", "/");
};
