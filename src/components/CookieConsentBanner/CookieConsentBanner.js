import React from "react";
import CookieConsent from "react-cookie-consent";
import {
	COOKIE_CONSENT_BANNER_ACCEPT_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DECLINE_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DESCRIPTION,
	COOKIE_CONSENT_BANNER_LOCATION,
	COOKIE_EXPIRATION_DATE,
} from "./const.js";
import {
	COOKIE_NAME,
	COOKIE_POLICY_LINK,
	COOKIE_POLICY_TEXT,
	PRIVACY_POLICY_LINK,
	PRIVACY_POLICY_TEXT,
} from "../../utils/const.js";
import Link from "../Link/Link.js";

/**
 * This component represents the cookie consent banner used by the user
 * to accept and refuse cookies. Building upon the CookieConsent object coming from
 * the library 'react-cookie-consent', it includes two buttons (to accept and refuse
 * cookies) and a brief description to guide the user during the decision process.
 * External links to cookie and privacy policies are also included.
 * @param props — Object containing:
 * 	 - isCookiesBannerVisible: boolean — Whether to show the banner.
 * 	 - handleAcceptCookies: function — Called when the user accepts cookies.
 * 	 - handleDeclineCookies: function — Called when the user declines cookies.
 * @returns {Element} — The cookie consent banner component.
 */
function CookieConsentBanner(props) {
	return (
		<>
			{/* Banner for accepting/refusing cookies */}
			{props.isCookiesBannerVisible && (
				<CookieConsent
					cookieName={COOKIE_NAME}
					expires={COOKIE_EXPIRATION_DATE}
					visible
					location={COOKIE_CONSENT_BANNER_LOCATION}
					buttonText={
						COOKIE_CONSENT_BANNER_ACCEPT_BUTTON_TEXT
					}
					declineButtonText={
						COOKIE_CONSENT_BANNER_DECLINE_BUTTON_TEXT
					}
					enableDeclineButton
					onAccept={props.handleAcceptCookies}
					onDecline={props.handleDeclineCookies}
				>
					{/* Cookie banner description */}
					{COOKIE_CONSENT_BANNER_DESCRIPTION}

					{/* Link to the privacy policy */}
					<Link
						href={PRIVACY_POLICY_LINK}
						text={PRIVACY_POLICY_TEXT}
					/>

					{" e "}

					{/* Link to the cookie policy */}
					<Link
						href={COOKIE_POLICY_LINK}
						text={COOKIE_POLICY_TEXT}
					/>

					{"."}
				</CookieConsent>
			)}
		</>
	);
}

export default CookieConsentBanner;
