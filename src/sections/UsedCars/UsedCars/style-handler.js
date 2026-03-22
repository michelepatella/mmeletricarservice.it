/**
 * Method to get the style of the unavailable
 * used car's description.
 * @returns {{
 * textAlign: string,
 * opacity: number
 * }} — CSS style.
 */
export const getUsedCarsUnavailableDescriptionStyle =
	() => {
		return {
			textAlign: "var(--font-alignment-center)",
			opacity: "var(--opacity-low)",
		};
	};

/**
 * Method to get the style of the custom loading
 * outlined displayed into the used cars section.
 * @returns {{marginTop: string}} — CSS style.
 */
export const getUsedCarsCustomLoadingOutlineStyle = () => {
	return {
		marginTop: "var(--vh-xxsmall)",
	};
};
