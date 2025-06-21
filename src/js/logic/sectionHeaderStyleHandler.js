/**
 * Method to handle the style of the name of the
 * section of the section header dynamically
 * @returns {{fontFamily: string, color: string, marginBottom: number, opacity: number, fontWeight: string}}
 */
export const handleSectionNameStyle = () => {
	return {
		marginBottom: 0,
		fontFamily: "Roboto, sans-serif",
		fontWeight: "bold",
		color: "var(--yellow_color)",
		opacity: "var(--text_low_opacity)",
	};
};

/**
 * Method to handle the style of the subtitle
 * of the section header dynamically
 * @returns {{textAlign: string, width: string}}
 */
export const handleSubtitleStyle = () => {
	return {
		width: "var(--section_header_subtitle_width)",
		textAlign: "center",
		opacity: "var(--text_low_opacity)",
	};
};
