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
 * This component represents the cookie
 * consent banner, which manages the acceptance/refusing of cookies. It
 * leverages CookieConsent object coming from the library 'react-cookie-consent'
 * to implement a banner appearing at the bottom of the web application.
 * The cookie banner includes two buttons (to accept and refuse third-party cookies),
 * as well as a brief description to guide the user during the decision process and the
 * links to cookie and privacy policies to learn more.
 * of cookies.
 * @param props — Object containing:
 * 	 - isCookiesBannerVisible: boolean — whether to show the banner.
 * 	 - handleAcceptCookies: function — called when the user accepts cookies.
 * 	 - handleDeclineCookies: function — called when the user declines cookies.
 * @returns {Element} — The cookie consent banner component.
 */
function CookieConsentBanner(props) {
	return (
		<>
			{/* Banner for consenting/declining cookies */}
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
