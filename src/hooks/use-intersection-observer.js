import { useEffect, useState } from "react";

/**
 * Custom hook to track whether an element of the webapp
 * is visible or not in the browser.
 * @param ref — The reference to the element to be observed.
 * @param threshold — Value indicating how much of the
 * element must be in view port to be considered visible.
 * @returns {boolean} — True if the element is visible, false
 * otherwise.
 */
const useIntersectionObserver = (ref, threshold) => {
	// State to keep track of the element's visibility
	const [isVisible, setIsVisible] = useState(false);

	/**
	 * Keep track of the element's visibility.
	 */
	useEffect(() => {
		// Get the reference of the element
		// to be observed
		const node = ref?.current;
		if (!node) 
			return;

		// Options for the IntersectionObserver
		const options = {
			root: null,
			threshold,
		};

		// Create an IntersectionObserver instance
		const observer = new IntersectionObserver(
			(entries, observer) => {
				for (const entry of entries ?? []) {
					if (entry?.isIntersecting) {
						// If the element is in view, 
						// update state and add CSS class
						setIsVisible(true);
						entry?.target?.classList?.add("in-view");

						// Stop observing the element as soon as 
						// it becomes visible
						observer?.unobserve(entry?.target);
					} else {
						// If element is out of view, update state
						setIsVisible(false);
					}
				}
			},
			options
		);

		// Start observing the element 
		// if the ref is valid
		if (ref && node) 
			observer?.observe(node);

		// Cleanup function to stop observing
		// the element when becoming unmounted
		return () => {
			if (ref && node) 
				observer?.unobserve(node);
		};
	}, [ref, threshold]);

	return isVisible;
};

export default useIntersectionObserver;
