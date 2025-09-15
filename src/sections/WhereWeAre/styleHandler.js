import { MAP_ICON_LINK } from "./const";

/**
 * Method to get the Google Maps container
 * style (when not available).
 * @returns {{
 * background: string,
 * opacity: string
 * }}
 */
export const getGoogleMapsContainerStyle = () => {
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
 * Method to get the style of the description displayed
 * when Google Maps is not available.
 * @returns {{
 * marginRight: string,
 * textAlign: string,
 * marginTop: string,
 * marginLeft: string
 * }}
 */
export const getGoogleMapsUnavailableDescriptionStyle =
	() => {
		return {
			textAlign: "center",
			margin:
				"var(--google_maps_unavailable_description_margins)",
		};
	};
