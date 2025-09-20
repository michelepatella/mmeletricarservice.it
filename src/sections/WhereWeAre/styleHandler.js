import { MAP_ICON_LINK } from "./const";

/**
 * Method to get the Google Maps container
 * style (when not available).
 * @returns {{
 * height: number,
 * background: string,
 * backgroundRepeat: string,
 * backgroundPosition: string,
 * backgroundSize: string,
 * boxShadow: string,
 * opacity: number
 * }} — CSS style.
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
 * textAlign: string,
 * margin: string,
 * }} — CSS style.
 */
export const getGoogleMapsUnavailableDescriptionStyle =
	() => {
		return {
			textAlign: "var(--font-alignment-center)",
			margin:
				"var(--size-medium) var(--size-small) var(--zero-size) var(--size-small)",
		};
	};
