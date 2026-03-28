/**
 * Method to get the style of the description displayed
 * when no used cars are available.
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
 * Method to get the custom style of the loading outlined.
 * @returns {{marginTop: string}} — CSS style.
 */
export const getUsedCarsCustomLoadingOutlineStyle = () => {
	return {
		marginTop: "var(--vh-xxsmall)",
	};
};
