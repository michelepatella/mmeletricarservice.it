import CookieConsent from "react-cookie-consent";
import {
	COOKIE_ACCEPT_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DESCRIPTION,
	COOKIE_DECLINE_BUTTON_TEXT,
	COOKIE_EXPIRATION_DATE,
} from "../../utils/const";

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
					cookieName="cookieConsent"
					expires={COOKIE_EXPIRATION_DATE}
					visible={true}
					location="bottom"
					buttonText={COOKIE_ACCEPT_BUTTON_TEXT}
					declineButtonText={COOKIE_DECLINE_BUTTON_TEXT}
					enableDeclineButton={true}
					onAccept={props.handleAcceptCookies}
					onDecline={props.handleDeclineCookies}
				>
					{/* Cookie banner description */}
					{COOKIE_CONSENT_BANNER_DESCRIPTION}
					{/* Links to the privacy policy and to the cookie policy */}
					<a
						href="/docs/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
						className="policy-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Privacy Policy
					</a>{" "}
					e{" "}
					<a
						href="/docs/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
						className="policy-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cookie Policy
					</a>
					. 🍪
				</CookieConsent>
			)}
		</>
	);
}

export default CookieConsentBanner;
