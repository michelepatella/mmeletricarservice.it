import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { SentryReact } from "../index.js";
import { COOKIE_NAME } from "../utils/const.js";

/**
 * Custom hook to manage cookie consent.
 * @returns {{
 * handleDeclineCookies: handleDeclineCookies, // Call to decline cookies
 * handleAcceptCookies: handleAcceptCookies, // Call to accept cookies
 * cookiesAccepted: boolean | null, // Current consent state
 * isCookiesBannerVisible: boolean, // Current visibility banner state
 * setIsCookiesBannerVisible: ( // Setter for banner visibility
 * value: (((prevState: boolean) => boolean
 * ) | boolean)) => void
 * }}
 */
export const useCookieConsent = () => {
	// State to keep track if cookies have
	// been accepted or not
	const [cookiesAccepted, setCookiesAccepted] =
		useState(null);

	// State to keep track when the cookie banner is visible
	// and when is not visible
	const [
		isCookiesBannerVisible,
		setIsCookiesBannerVisible,
	] = useState(false);

	/**
	 * Keep track of any cookie decision change
	 */
	useEffect(() => {
		try {
			// Get the cookie consent variable that keeps
			// track of the cookie acceptance status
			const cookieConsent = Cookies.get(COOKIE_NAME);

			// Check if cookies have been accepted or not
			if (cookieConsent === "true") {
				// Cookies have been accepted
				setCookiesAccepted(true);
				SentryReact.logger.info(
					"Cookies previously accepted",
					{
						cookieName: COOKIE_NAME,
					}
				);
			} else if (cookieConsent === "false") {
				// Cookies have been refused
				setCookiesAccepted(false);
				SentryReact.logger.info(
					"Cookies previously declined",
					{
						cookieName: COOKIE_NAME,
					}
				);
			} else {
				// No explicit choice: show the cookie banner
				// to ask the user a choice and set cookies to refused
				// by default
				setIsCookiesBannerVisible(true);
				setCookiesAccepted(false);
				SentryReact.logger.warn("No cookie consent found", {
					cookieName: COOKIE_NAME,
				});
			}
		} catch (error) {
			SentryReact.logger.error(error, {
				cookieName: COOKIE_NAME,
			});

			// Close the cookie consent banner and set cookies
			// acceptance to false in case of error
			setIsCookiesBannerVisible(false);
			setCookiesAccepted(false);
		}
	}, []);

	/**
	 * To manage cookie accepting
	 */
	const handleAcceptCookies = () => {
		// Set cookies as accepted and close the
		// cookie consent banner
		setCookiesAccepted(true);
		setIsCookiesBannerVisible(false);
		SentryReact.logger.info("User accepted cookies", {
			cookieName: COOKIE_NAME,
		});
	};

	/**
	 * To manage cookie declining
	 */
	const handleDeclineCookies = () => {
		// Check if the page needs to be refreshed
		// depending on the current cookie accepting state
		let isRefreshNeeded = false;

		// If cookies were accepted and have been
		// refused now, refresh the page to remove
		// cookies completely from the session
		if (cookiesAccepted) {
			isRefreshNeeded = true;
			SentryReact.logger.warn(
				"User changed cookie consent from accepted to declined",
				{ cookieName: COOKIE_NAME }
			);
		}

		// Set cookies as refused and close the cookie
		// consent banner
		setCookiesAccepted(false);
		setIsCookiesBannerVisible(false);

		SentryReact.logger.info("User declined cookies", {
			cookieName: COOKIE_NAME,
		});

		// Refresh the page, if needed
		if (isRefreshNeeded) {
			try {
				/* eslint-disable-next-line no-undef */
				globalThis.location.reload();
				SentryReact.logger.info("Page has been refreshed");
			} catch (error) {
				SentryReact.logger.error(error, {
					context: "Page refresh after cookie decline",
				});
			}
		}
	};

	return {
		cookiesAccepted,
		isCookiesBannerVisible,
		handleAcceptCookies,
		handleDeclineCookies,
		setIsCookiesBannerVisible,
	};
};
