import { useEffect, useState } from "react";
import { ALL_MENU_SECTIONS } from "../const.js";

/**
 * Helper method to check section visibility and update
 * the current one.
 * @param id — ID of the HTML element.
 * @param closestDistanceRef — The smallest distance from
 * the top of the viewport among all sections checked so far.
 * @returns {{closestDistance: number, currentSection}|{closestDistance, currentSection: null}}
 * — An object containing the smallest distance from the viewport
 * top and the ID of the section currently in view.
 */
const checkAndUpdateSection = (id, closestDistanceRef) => {
	// Check whether the section exists in the DOM
	const element = document.getElementById(id);
	if (!element)
		return {
			closestDistance: closestDistanceRef,
			currentSection: null,
		};

	// Calculate the distance element-top
	const rect = element.getBoundingClientRect();
	const distanceToTop = Math.abs(rect?.top);

	// Check whether the section is within the viewport
	if (
		rect?.top < window.innerHeight &&
		rect?.bottom > 0 &&
		distanceToTop < closestDistanceRef
	) {
		// New closest distance and new current
		// section identified
		return {
			closestDistance: distanceToTop,
			currentSection: id,
		};
	}

	return {
		closestDistance: closestDistanceRef,
		currentSection: null,
	};
};

/**
 * Helper method to get the current section in view.
 * @returns {string} — The current section.
 */
const getCurrentSection = () => {
	let currentSection = "";
	let closestDistance = Infinity;

	// Loop over all the sections to determine 
	// which is in view
	for (const sec of ALL_MENU_SECTIONS ?? []) {
		// Check for parent sections
		const result = checkAndUpdateSection(
			sec?.id,
			closestDistance
		);
		if (result.currentSection) {
			closestDistance = result.closestDistance;
			currentSection = result.currentSection;
		}

		// Check for child sections
		for (const child of sec?.children ?? []) {
			const childResult = checkAndUpdateSection(
				child?.id,
				closestDistance
			);
			if (childResult.currentSection) {
				closestDistance = childResult.closestDistance;
				currentSection = childResult.currentSection;
			}
		}
	}

	return currentSection;
};

/**
 * Method to make animate the transition from a
 * section to another one.
 * @param sectionId — ID of the section to move to.
 * @param setVisible — Menu visibility state.
 */
const scrollToSection = (sectionId, setVisible) => {
	// Scroll to the section
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView();
	}

	// Make the menu not visible and make the page 
	// scrollable again, if requested
	// (useful for the hamburger menu)
	if (setVisible != null) {
		setVisible(false);
		document.documentElement.style.overflowY =
			"var(--overflow-auto)";
	}
};

/**
 * Helper method to map children menu items to their parents.
 * @param children — Children menu items.
 * @param parentIndex — The index of the parent menu
 * items of the children menu items.
 * @param setVisible — Menu visibility state.
 * @returns {*} — Array of child menu items objects,
 * each with a key, href, title, and onClick handler.
 */
const mapChildren = (children, parentIndex, setVisible) =>
	children?.map((child, childIndex) => ({
		key: parentIndex + 1 + "-" + (childIndex + 1),
		href: "#" + child?.id,
		title: child?.title,
		onClick: () => scrollToSection(child?.id, setVisible),
	}));

/**
 * Custom hook to manage—anchor and hamburger—menu behavior.
 * @returns {{
 * visible: boolean, // State tracking menu visibility
 * menuItems: { // All menu items
 * onClick: function(): void,
 * children: *|undefined,
 * href: string,
 * title: *, key: string}[],
 * section: string, // Current section
 * toggleDrawer: toggleDrawer // Function to toggle menu visibility
 * }}
 */
export const useMenu = () => {
	// State to track menu visibility
	const [visible, setVisible] = useState(false);

	// State to track the current active section
	// (the first one by default)
	const [section, setSection] = useState(
		ALL_MENU_SECTIONS[0].id
	);

	/**
	 * Method to toggle the menu visibility.
	 */
	const toggleDrawer = () => {
		// Enable/disable the scroll of the rest of the page
		// depending on whether the menu is open/closed
		if (visible)
			document.documentElement.style.overflowY =
				"var(--overflow-auto)";
		else
			document.documentElement.style.overflowY =
				"var(--overflow-hidden)";

		// Change menu visibility
		setVisible(!visible);
	};

	useEffect(() => {
		/**
		 * Method to handle menu scrolling.
		 */
		const handleScroll = () => {
			// Update the state with the current section
			setSection(getCurrentSection());
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		return () => {
			// Remove scroll event listener on cleanup
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	/**
	 * Method to generate menu items dynamically.
	 */
	const menuItems = ALL_MENU_SECTIONS?.map(
		(section, index) => ({
			key: index + 1,
			href: "#" + section?.id,
			title: section?.title,
			onClick: () =>
				scrollToSection(section?.id, setVisible),
			children: mapChildren(
				section?.children,
				index,
				setVisible
			),
		})
	);

	return {
		menuItems,
		section,
		visible,
		toggleDrawer,
	};
};
