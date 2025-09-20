/**
 * Method to get the style of the info card title.
 * @returns {{marginTop: number}} — CSS style.
 */
export const getInfoCardTitleStyle = () => {
	return {
		marginTop: "var(--margin-small)",
	};
};

/**
 * Method to get the style of the info card
 * description.
 * @returns {{marginTop: number, opacity: number}} — CSS style.
 */
export const getInfoCardDescriptionStyle = () => {
	return {
		marginTop: "var(--zero-margin)",
		opacity: "var(--font-low-opacity)",
	};
};
