/**
 * Method to get the background container style.
 * @param image
 * @returns {{background: string}}
 */
export const getBackgroundContainerStyle = (image) => {
	return {
		background:
			"var(--background-container-gradient-top), " +
			"var(--background-container-gradient-bottom), " +
			"var(--background-container-gradient-left), " +
			"url(" +
			image +
			")",
		backgroundSize: "var(--background-size-auto)",
		backgroundRepeat: "var(--background-repeat)",
	};
};
