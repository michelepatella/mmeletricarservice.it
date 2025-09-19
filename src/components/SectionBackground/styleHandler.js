/**
 * Method to get the section background style.
 * @param image
 * @returns {{background: string}}
 */
export const getSectionBackgroundStyle = (image) => {
	return {
		background:
			"var(--color-dark-gradient-top), " +
			"var(--color-dark-gradient-bottom), " +
			"var(--color-dark-gradient-left), " +
			"url(" +
			image +
			")",
		backgroundSize: "var(--background-size-auto)",
		backgroundRepeat: "var(--background-repeat)",
	};
};
