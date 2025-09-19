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
		height: "var(--full-size)",
		background: "url(" + MAP_ICON_LINK + ")",
		backgroundRepeat: "var(--background-no-repeat)",
		backgroundPosition:
			"var(--background-position-center-top)",
		backgroundSize: "var(--vw-small)",
		boxShadow: "var(--shadow-none)",
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
				"var(--size-medium) var(--size-small) var(--zero-size) var(--size-small)",
		};
	};
