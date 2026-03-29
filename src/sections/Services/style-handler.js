/**
 * Method to get the style of the section title.
 * @param numTitles — The number of titles to be displayed.
 * @returns {{
 * 	display: string,
 * 	flexDirection: string,
 * 	minHeight: number
 * }} — CSS style.
 */
export const getServicesTitleStyle = (numTitles) => {
	return {
		display: "var(--display-flex)",
		flexDirection: "var(--flex-direction-column)",
		minHeight:
			"calc(var(--font-super-heading-line-height) * " +
			numTitles +
			" * var(--font-size-super-heading))",
	};
};

/**
 * Method to get the style of the spans used
 * for displaying the section title.
 * @param title — The title to be displayed.
 * @returns {string} — CSS style.
 */
export const getServicesTitleSpanStyle = (title) => {
	return (
		"background: " +
		title.gradient +
		"; -webkit-background-clip: var(--services-title-webkit-background-clip); -webkit-text-fill-color: var(--color-transparent);"
	);
};
