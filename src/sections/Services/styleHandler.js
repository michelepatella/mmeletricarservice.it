/**
 * Method to get the style of services section title.
 * @returns {{minHeight: string, flexDirection: string, display: string}}
 */
export const getServicesTitleStyle = () => {
	return {
		display: "flex",
		flexDirection: "column",
		minHeight: "calc(4.7 * var(--super_heading_font_size))",
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
		"-webkit-background-clip: text;" +
		"-webkit-text-fill-color: transparent"
	);
};
