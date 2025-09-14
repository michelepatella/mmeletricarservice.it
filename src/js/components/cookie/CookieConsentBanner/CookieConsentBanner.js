import CookieConsent from "react-cookie-consent";
import {
	COOKIE_ACCEPT_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DESCRIPTION,
	COOKIE_CONSENT_BANNER_ENABLE_DECLINE_BUTTON,
	COOKIE_CONSENT_BANNER_LOCATION,
	COOKIE_CONSENT_BANNER_VISIBLE,
	COOKIE_DECLINE_BUTTON_TEXT,
	COOKIE_EXPIRATION_DATE,
	COOKIE_NAME,
	COOKIE_POLICY_TEXT,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const";
import {
	COOKIE_POLICY_LINK,
	PRIVACY_POLICY_LINK,
} from "../../../utils/internal_links";
import CustomLink from "../../custom/CustomLink";

/**
 * This component represents the cookie
 * consent banner, which manages the acceptance/refusing of cookies. It
 * leverages CookieConsent object coming from the library 'react-cookie-consent'
 * to implement a banner appearing at the bottom of the web application.
 * The cookie banner includes two buttons (to accept and refuse third-party cookies),
 * as well as a brief description to guide the user during the decision process and the
 * links to cookie and privacy policies to learn more.
 * of cookies.
 * @param props
 * @returns {Element}
 * @constructor
 */
function CookieConsentBanner(props) {
	return (
		<>
			{/* Banner for consenting/declining cookies */}
			{props.isCookiesBannerVisible && (
				<CookieConsent
					cookieName={COOKIE_NAME}
					expires={COOKIE_EXPIRATION_DATE}
					visible={COOKIE_CONSENT_BANNER_VISIBLE}
					location={COOKIE_CONSENT_BANNER_LOCATION}
					buttonText={COOKIE_ACCEPT_BUTTON_TEXT}
					declineButtonText={COOKIE_DECLINE_BUTTON_TEXT}
					enableDeclineButton={COOKIE_CONSENT_BANNER_ENABLE_DECLINE_BUTTON}
					onAccept={props.handleAcceptCookies}
					onDecline={props.handleDeclineCookies}
				>
					{/* Cookie banner description */}
					{COOKIE_CONSENT_BANNER_DESCRIPTION}

					{/* Link to the privacy policy */}
					<CustomLink
						href={PRIVACY_POLICY_LINK}
						text={PRIVACY_POLICY_TEXT}
					/>

					{" e "}

					{/* Link to the cookie policy */}
					<CustomLink
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
