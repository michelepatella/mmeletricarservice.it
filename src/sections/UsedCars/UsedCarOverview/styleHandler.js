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
		marginTop: "var(--used-car-overview-text-margin-top)",
		marginBottom: "var(--used-car-overview-text-margin-bottom)",
		fontFamily: "var(--font-family)",
		fontWeight: isTitleVisible ? "var(--font-weight-bold)" : "var(--font-weight-normal)",
		opacity: "var(--opacity-low)",
	};
};
