/**
 * Method to handle the Google Maps container
 * style-handling (when not available) dynamically.
 * @returns {{
 * background: string,
 * opacity: string
 * }}
 */
export const handleGoogleMapsContainerStyle = () => {
	return {
		height: "calc(var(--google_maps_height)/2)",
		background: "url(/icons/map_icon.svg)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center top",
		backgroundSize:
			"var(--google_maps_unavailable_background_size)",
		opacity: "var(--text_low_opacity)",
	};
};

/**
 * Method to handle the description when Google
 * Maps is not available dynamically.
 * @returns {{
 * marginRight: string,
 * textAlign: string,
 * marginTop: string,
 * marginLeft: string
 * }}
 */
export const handleGoogleMapsUnavailableDescriptionStyle =
	() => {
		return {
			textAlign: "center",
			margin:
				"var(--google_maps_unavailable_description_margins)",
		};
	};
