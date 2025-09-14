/**
 * Method to handle the style of services section
 * title dynamically.
 * @returns {{minHeight: string, flexDirection: string, display: string}}
 */
export const handleTitleStyle = () => {
	return {
		display: "flex",
		flexDirection: "column",
		minHeight: "calc(4.7 * var(--super_heading_font_size))",
	};
};

/**
 * Method to handle the style of the spans used
 * for displaying section title dynamically.
 * @param title
 * @returns {{WebkitTextFillColor: string, WebkitBackgroundClip, background: (string|*)}}
 */
export const handleSpanTitleStyle = (title) => {
	return (
		"background:" +
		title.gradient +
		";" +
		"-webkit-background-clip: text;" +
		"-webkit-text-fill-color: transparent"
	);
};
