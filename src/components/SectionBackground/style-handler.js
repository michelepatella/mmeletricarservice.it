/**
 * Method to get the section background style.
 * @param image — The image to be set as background.
 * @returns {{
 * 	background: string,
 * 	backgroundSize: string,
 * 	backgroundRepeat: string
 * }} — CSS style.
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
