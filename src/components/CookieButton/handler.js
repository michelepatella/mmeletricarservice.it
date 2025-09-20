/**
 * To manage the cookie button clicking, through which
 * the user can open the cookie consent banner.
 * @param setIsCookiesBannerVisible — Setter for cookie
 * consent banner visibility.
 */
export const onCookieButtonClick = (
	setIsCookiesBannerVisible
) => {
	// When the cookie button is clicked, the cookie
	// consent banner must be shown
	setIsCookiesBannerVisible(true);
};
