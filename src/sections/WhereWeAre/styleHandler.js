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
		height: "var(--where-we-are-google-maps-unavailable-container-height)",
		background: "url(" + MAP_ICON_LINK + ")",
		backgroundRepeat: "var(--background-no-repeat)",
		backgroundPosition: "var(--background-position-center-top)",
		backgroundSize:
			"var(--where-we-are-google-maps-unavailable-background-size)",
		opacity: "var(--opacity-low)",
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
			textAlign: "var(--font-alignment-center)",
			margin:
				"var(--where-we-are-google-maps-unavailable-description-margin)",
		};
	};
