/**
 * Method to get the style of the info card title.
 * @returns {{marginTop: string}}
 */
export const getInfoCardTitleStyle = () => {
	return {
		marginTop: "var(--margin-small)",
	};
};

/**
 * Method to get the style of the info card
 * description.
 * @returns {{opacity: string, marginTop: string}}
 */
export const getInfoCardDescriptionStyle = () => {
	return {
		marginTop: "var(--zero-margin)",
		opacity: "var(--font-low-opacity)",
	};
};
