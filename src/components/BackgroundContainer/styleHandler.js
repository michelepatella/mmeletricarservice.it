/**
 * Method to get the background container style.
 * @param image
 * @returns {{background: string}}
 */
export const getBackgroundContainerStyle = (image) => {
	return {
		background:
			"var(--background-gradient-top), " +
			"var(--background-gradient-bottom), " +
			"var(--background-gradient-left), " +
			"url(" +
			image +
			")",
		backgroundSize: "var(--background-size-auto)",
		backgroundRepeat: "var(--background-repeat)",
	};
};
