/**
 * Method to get the background container style.
 * @param image
 * @returns {{background: string}}
 */
export const getBackgroundContainerStyle = (image) => {
	return {
		background:
			"var(--gradient-dark-top), " +
			"var(--gradient-dark-bottom), " +
			"var(--gradient-dark-left), " +
			"url(" +
			image +
			")",
		backgroundSize: "var(--background-size-auto)",
		backgroundRepeat: "var(--background-repeat)",
	};
};
