import { useEffect, useState } from "react";

/**
 * Custom hook to track if an element of the web application
 * is visible or not in the browser.
 * @param ref
 * @param threshold
 * @returns {boolean}
 */
const useIntersectionObserver = (ref, threshold) => {
	// State to track visibility of the element
	const [isVisible, setIsVisible] = useState(false);

	/**
	 * Keep track of the element's state (visible or not)
	 */
	useEffect(() => {
		// Get the reference
		const node = ref?.current;
		if (!node) return;

		// Options for the IntersectionObserver
		const options = {
			root: null,
			threshold,
		};

		// Create an IntersectionObserver instance
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries?.forEach((entry) => {
					if (entry?.isIntersecting) {
						// If the element is in view, update state and add CSS class
						setIsVisible(true);
						entry?.target?.classList?.add("in-view");

						// Stop observing once the element is visible
						observer?.unobserve(entry?.target);
					} else {
						// If element is out of view, update state
						setIsVisible(false);
					}
				});
			},
			options
		);

		// Start observing the element if the ref is valid
		if (ref && node) observer?.observe(node);

		// Cleanup function to stop observing when component unmounts
		return () => {
			if (ref && node) observer?.unobserve(node);
		};
	}, [ref, threshold]);

	return isVisible;
};

export default useIntersectionObserver;
