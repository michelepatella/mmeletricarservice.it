import CookieConsent from "react-cookie-consent";
import {Switch} from "antd";
import {COOKIE_CONSENT_BANNER_DESCRIPTION} from "../../utils/const";
import {handleSwitchStyle} from "../../logic/cookieConsentBannerStyleHandler";
import CustomText from "../custom/CustomText";
import CustomButton from "../custom/CustomButton";

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
                buttonText="Accetta tutti"
                declineButtonText="Rifiuta tutti"
                enableDeclineButton={true}
                onAccept={props.handleAcceptCookies}
                onDecline={props.handleDeclineCookies}>

                {/* Cookie banner description */}
                {COOKIE_CONSENT_BANNER_DESCRIPTION}

                {/* Link to the privacy policy and to the cookie policy */}
                <a
                    href="/policies/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer">Privacy Policy
                </a>
                {" "} e {" "}
                <a
                    href="/policies/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer">Cookie Policy
                </a>
                .{" "}🍪

                {/* Switch for necessary cookies */}
                <div className="cookie-switch-container">

                    <Switch
                        disabled
                        checked={true}
                        style={handleSwitchStyle(props.tempPreferences, "necessary-cookie")} />

                    <CustomText
                        type="caption"
                        text="Cookies tecnici e di sicurezza" />

                </div>

                {/* Switch for third-party cookies */}
                <div className="cookie-switch-container">

                    <Switch
                        checked={props.tempPreferences}
                        onChange={() => props.setTempPreferences(!props.tempPreferences)}
                        style={handleSwitchStyle(props.tempPreferences, "third-party-cookie")} />

                    <CustomText
                        type="caption"
                        text="Cookies di terze parti" />

                </div>

                {/* Save preferences button */}
                <CustomButton
                    value="Salva preferenze"
                    onClick={props.handleSavePreferences}
                    style={{fontSize: 'var(--caption_text_font_size)'}} />

            </CookieConsent>

        )}
        </>
    )
}

export default CookieConsentBanner;