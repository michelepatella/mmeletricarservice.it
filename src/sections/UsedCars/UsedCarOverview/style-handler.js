/**
 * Method to get the style of the 'UsedCarOverview' text.
 * @returns {{
 * marginTop: number
 * marginBottom: number,
 * fontFamily: string,
 * fontWeight: string,
 * opacity: number
 * }} — CSS style.
 */
export const getUsedCarOverviewTextStyle = (
	isTitleVisible
) => {
	return {
		marginTop: "var(--zero-margin)",
		marginBottom: "var(--zero-margin)",
		fontFamily: "var(--font-family-default)",
		fontWeight: "var(--font-weight-normal)",
		opacity: isTitleVisible
			? "var(--opacity-high)"
			: "var(--opacity-low)",
	};
};
