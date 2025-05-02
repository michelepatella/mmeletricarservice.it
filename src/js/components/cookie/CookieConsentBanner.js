import CookieConsent from "react-cookie-consent";
import {
  COOKIE_ACCEPT_BUTTON_TEXT,
  COOKIE_CONSENT_BANNER_DESCRIPTION,
  COOKIE_DECLINE_BUTTON_TEXT,
} from "../../utils/const";

/**
 * Cookie Consent Banner
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
          expires={30}
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
          {/* Link to the privacy policy and to the cookie policy */}
          <a
            href="/doc/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
            className="policy-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          e{" "}
          <a
            href="/doc/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
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
