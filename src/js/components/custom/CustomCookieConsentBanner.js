import React from "react";
import CookieConsent from "react-cookie-consent";
import {Switch} from "antd";
import {COOKIE_CONSENT_BANNER_DESCRIPTION} from "../../utils/constants";
import {handleSwitchStyle} from "../../logic/styleHandler";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import '../../../styles/components/custom/CustomCookieConsentBanner.css';
import '../../../styles/components/custom/CustomCookieButton.css';

/**
 * Custom Cookie Consent Banner
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomCookieConsentBanner(props) {
    return (

        <>
        {/* Banner for consenting/declining cookies */}
        {props.isCookiesBannerVisible && (

            <CookieConsent
                cookieName="cookieConsent"
                expires={30}
                buttonText="Accetta tutti"
                declineButtonText="Rifiuta tutti"
                location="bottom"
                enableDeclineButton={true}
                visible={true}
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
                        checked={true}
                        disabled
                        style={handleSwitchStyle(props.tempPreferences, "necessary-cookie")}/>

                    <CustomText
                        type="small"
                        text="Cookies tecnici e di sicurezza"/>

                </div>

                {/* Switch for third-party cookies */}
                <div className="cookie-switch-container">

                    <Switch
                        checked={props.tempPreferences}
                        onChange={() => props.setTempPreferences(!props.tempPreferences)}
                        style={handleSwitchStyle(props.tempPreferences, "third-party-cookie")} />

                    <CustomText
                        type="small"
                        text="Cookies di terze parti"/>

                </div>

                {/* Save preferences button */}
                <CustomButton
                    onClick={props.handleSavePreferences}
                    value="Salva preferenze"
                    style={{fontSize: 'var(--small_text_size)'}}>
                    Salva preferenze
                </CustomButton>

            </CookieConsent>

        )}
        </>
    )
}

export default CustomCookieConsentBanner;