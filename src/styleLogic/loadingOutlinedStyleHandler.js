/**
 * Method to handle the style of the loading outlined
 * component (Ant Design) dynamically.
 * @returns {{alignSelf: string, alignItems: string, color: string, display: string, width: string, justifyContent: string, maxWidth: string}}
 */
export const handleLoadingOutlinedStyle = () => {
	return {
		width: "var(--loading_outlined_width)",
		maxWidth: "var(--section_max_width)",
		display: "flex",
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center",
		color: "var(--loading_outlined_color)",
	};
};
