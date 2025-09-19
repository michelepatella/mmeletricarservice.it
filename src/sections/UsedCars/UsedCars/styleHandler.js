/**
 * Method to get the style of the unavailable
 * used car's description.
 * @returns {{
 * textAlign: string,
 * opacity: string
 * }}
 */
export const getUsedCarsUnavailableDescriptionStyle =
	() => {
		return {
			textAlign: "var(--font-alignment-center)",
			opacity: "var(--opacity-low)",
		};
	};
/**
 * Method to get the style of the animated division
 * containing the used cars.
 * @param containerStyles
 * @returns {{transform: *, opacity: *}}
 */
export const getUsedCarsAnimatedDivStyle = (
	containerStyles
) => {
	return {
		opacity: containerStyles.y.to(
			(y) => 1 - parseInt(y) / 100
		),
		transform: containerStyles.y.to(
			(y) => "translateY(" + y + ")"
		),
	};
};

/**
 * Method to get the style of the custom loading
 * outlined displayed into the used cars section.
 * @returns {{marginLeft: string}}
 */
export const getUsedCarsCustomLoadingOutlineStyle = () => {
	return {
		marginTop: "var(--vh-xxsmall)",
	};
};
