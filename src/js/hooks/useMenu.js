import { useState, useEffect } from "react";
import { SECTIONS } from "../utils/const";
import { scrollToSection } from "../utils/scrollToSection";
import { useAnimation } from "framer-motion";

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
	SECTIONS?.forEach((sec) => {
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
 * Helper method to map children menu items
 */
const mapChildren = (children, parentIndex, setVisible) =>
	children?.map((child, childIndex) => ({
		key:
			"section-" +
			(parentIndex + 1) +
			"-child-" +
			(childIndex + 1),
		href: "#" + child?.id,
		title: child?.title,
		onClick: () => scrollToSection(child?.id, setVisible),
	}));

/**
 * Custom hook to manage (anchor and hamburger) menu behavior.
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

	// State to track menu visibility
	const [visible, setVisible] = useState(false);

	// State to track the current active section
	const [section, setSection] = useState("home");

	/**
	 * Method to toggle the menu visibility
	 */
	const toggleDrawer = () => {
		// Enable/disable the scroll of the rest of the page
		// depending on if the menu is open/closed
		if (visible)
			document.documentElement.style.overflowY = "auto";
		else
			document.documentElement.style.overflowY = "hidden";

		// Change menu visibility
		setVisible(!visible);
	};

	useEffect(() => {
		// Menu animation
		menuItemControls.start({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
			},
		});

		/**
		 * Method to handle menu scrolling
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
	 * Method to generate menu items dynamically.
	 * @type {unknown[] | undefined}
	 */
	const menuItems = SECTIONS?.map((section, index) => ({
		key: "section-" + (index + 1),
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
