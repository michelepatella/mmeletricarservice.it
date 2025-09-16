/**
 * Method to get the style of the horizontal scroll label.
 * @returns {{textAlign: string, opacity: string, marginLeft: (string|number)}}
 */
export const getHorizontalScrollLabelStyle = () => {
	return {
		marginLeft: "var(--used_cars_scroll_label_margin_left)",
		textAlign: "center",
		opacity: "var(--low_opacity)",
	};
};
