/**
 * To manage the cookie button clicking, through which
 * the user can open the cookie consent banner.
 * @param setIsCookiesBannerVisible
 */
export const handleCookieButtonClick = (
	setIsCookiesBannerVisible
) => {
	// When the cookie button is clicked, the cookie
	// consent banner must be shown
	setIsCookiesBannerVisible(true);
};
