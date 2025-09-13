/**
 * Method to handle the style of the info card text overview
 * style dynamically.
 * @returns {{
 * marginBottom: string,
 * opacity: number,
 * marginTop: number
 * }}
 */
export const handleTextOverviewStyle = (isTitleVisible) => {
	return {
		marginTop: 0,
		marginBottom:
			"var(--used_car_overview_text_margin_top)",
		fontFamily: "Poppins",
		fontWeight: isTitleVisible ? "bold" : "normal",
		opacity: "var(--low_opacity)",
	};
};

/**
 * Method to handle the style of the scroll label of the user cars
 * section dynamically.
 * @returns {{
 * textAlign: string,
 * opacity: number,
 * marginLeft: string
 * }}
 */
export const handleScrollLabelStyle = () => {
	return {
		marginLeft: "var(--used_cars_scroll_label_margin_left)",
		textAlign: "center",
		opacity: "var(--low_opacity)",
	};
};

/**
 * Method to handle the style of the unavailable
 * used car's description dynamically.
 * @returns {{
 * textAlign: string,
 * opacity: string
 * }}
 */
export const handleUnavailableUsedCarDescriptionStyle =
	() => {
		return {
			textAlign: "center",
			opacity: "var(--low_opacity)",
		};
	};

/**
 * Method to handle the style of the animated division
 * containing the used cars dynamically.
 * @param containerStyles
 * @returns {{transform: *, opacity: *}}
 */
export const handleAnimatedDivStyle = (containerStyles) => {
	return {
		opacity: containerStyles.y.to(
			(y) => 1 - parseInt(y) / 100
		),
		transform: containerStyles.y.to(
			(y) => "translateY(" + y + ")"
		),
	};
};
