import { MAP_ICON_LINK } from "../../utils/internal_links";

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
		background: "url(" + MAP_ICON_LINK + ")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center top",
		backgroundSize:
			"var(--google_maps_unavailable_background_size)",
		opacity: "var(--low_opacity)",
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
