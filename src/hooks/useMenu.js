import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import {
	MENU_BIG_ANIMATION_DURATION,
	MENU_BIG_FINAL_OPACITY,
	MENU_BIG_FINAL_X_POSITION,
} from "../utils/const/components/menuConst";
import { ALL_SECTIONS } from "../utils/const/sections/generalSectionConst";

/**
 * Helper method to check element visibility
 * and update current section
 */
const checkAndUpdateSection = (id, closestDistanceRef) => {
	// Read the element
	const element = document.getElementById(id);

	if (!element)
		return {
			closestDistance: closestDistanceRef,
			currentSection: null,
		};

	// Calculate the distance element-top
	const rect = element.getBoundingClientRect();
	const distanceToTop = Math.abs(rect?.top);

	// Check if the section is within the viewport
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
 * Helper method to get the current section in view
 */
const getCurrentSection = () => {
	let currentSection = "";
	let closestDistance = Infinity;

	// Loop through each section to
	// determine which is in view
	ALL_SECTIONS?.forEach((sec) => {
		// Check for sections
		const result = checkAndUpdateSection(
			sec?.id,
			closestDistance
		);
		if (result.currentSection) {
			closestDistance = result.closestDistance;
			currentSection = result.currentSection;
		}

		// Check for child sections
		sec?.children?.forEach((child) => {
			const childResult = checkAndUpdateSection(
				child?.id,
				closestDistance
			);
			if (childResult.currentSection) {
				closestDistance = childResult.closestDistance;
				currentSection = childResult.currentSection;
			}
		});
	});

	return currentSection;
};

/**
 * Method to make animate the transition from a
 * section to another one.
 * @param sectionId
 * @param setVisible
 */
const scrollToSection = (sectionId, setVisible) => {
	// Get the section ID
	const section = document.getElementById(sectionId);

	// Move to the section smoothly
	if (section) {
		section.scrollIntoView();
	}

	// Make the Menu not visible (if the method has been called by the Menu)
	// and make the page scrollable again
	if (setVisible != null) {
		setVisible(false);
		document.documentElement.style.overflowY = "auto";
	}
};
/**
 * Helper method to map children Menu items
 */
const mapChildren = (children, parentIndex, setVisible) =>
	children?.map((child, childIndex) => ({
		key: parentIndex + 1 + "-" + (childIndex + 1),
		href: "#" + child?.id,
		title: child?.title,
		onClick: () => scrollToSection(child?.id, setVisible),
	}));

/**
 * Custom hook to manage (anchor and hamburger) Menu behavior.
 * @returns {{
 * visible: boolean,
 * menuItems: {
 * onClick: function(): void,
 * children: *|undefined,
 * href: string,
 * title: *, key: string}[],
 * section: string,
 * toggleDrawer: toggleDrawer
 * }}
 */
export const useMenu = () => {
	// For the item animation
	const menuItemControls = useAnimation();

	// State to track Menu visibility
	const [visible, setVisible] = useState(false);

	// State to track the current active section
	// (the first one by default)
	const [section, setSection] = useState(
		ALL_SECTIONS[0].id
	);

	/**
	 * Method to toggle the Menu visibility
	 */
	const toggleDrawer = () => {
		// Enable/disable the scroll of the rest of the page
		// depending on if the Menu is open/closed
		if (visible)
			document.documentElement.style.overflowY = "auto";
		else
			document.documentElement.style.overflowY = "hidden";

		// Change Menu visibility
		setVisible(!visible);
	};

	useEffect(() => {
		// Menu animation
		menuItemControls.start({
			opacity: MENU_BIG_FINAL_OPACITY,
			x: MENU_BIG_FINAL_X_POSITION,
			transition: {
				duration: MENU_BIG_ANIMATION_DURATION,
			},
		});

		/**
		 * Method to handle Menu scrolling
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
	}, [menuItemControls]);

	/**
	 * Method to generate Menu items dynamically.
	 * @type {unknown[] | undefined}
	 */
	const menuItems = ALL_SECTIONS?.map((section, index) => ({
		key: index + 1,
		href: "#" + section?.id,
		title: section?.title,
		onClick: () => scrollToSection(section?.id, setVisible),
		children: mapChildren(
			section?.children,
			index,
			setVisible
		),
	}));

	return {
		menuItems,
		menuItemControls,
		section,
		visible,
		toggleDrawer,
	};
};
