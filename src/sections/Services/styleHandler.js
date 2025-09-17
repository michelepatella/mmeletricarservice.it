/**
 * Method to get the style of services section title.
 * @returns {{minHeight: string, flexDirection: string, display: string}}
 */
export const getServicesTitleStyle = () => {
	return {
		display: "var(--display-flex)",
		flexDirection: "var(--flex-direction-column)",
		minHeight: "calc(var(--services-title-min-height-multiplier) * var(--font-size-super-heading))",
	};
};

/**
 * Method to get the style of the spans used
 * for displaying section title.
 * @param title
 * @returns {{WebkitTextFillColor: string, WebkitBackgroundClip, background: (string|*)}}
 */
export const getServicesTitleSpanStyle = (title) => {
	return (
		"background:" +
		title.gradient +
		";" +
		"-webkit-background-clip: var(--services-title-webkit-background-clip);" +
		"-webkit-text-fill-color: var(--color-transparent)"
	);
};
