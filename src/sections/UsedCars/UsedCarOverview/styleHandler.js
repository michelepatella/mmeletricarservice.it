/**
 * Method to get the style of the used car overview text.
 * @returns {{
 * marginBottom: string,
 * opacity: number,
 * marginTop: number
 * }}
 */
export const getUsedCarOverviewTextStyle = (
	isTitleVisible
) => {
	return {
		marginTop: 0,
		marginBottom:
			"var(--used_car_overview_text_margin_top)",
		fontFamily: "Poppins",
		fontWeight: isTitleVisible ? "bold" : "normal",
		opacity: "var(--low_opacity)",
	};
};
