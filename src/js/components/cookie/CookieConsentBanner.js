import {useState} from "react";
import CookieConsent from "react-cookie-consent";
import {COOKIE_CONSENT_BANNER_DESCRIPTION, COOKIES} from "../../utils/const";
import CustomButton from "../custom/CustomButton";
import CookieSwitchContainer from "./CookieSwitchContainer";

/**
 * Cookie Consent Banner
 * @param props
 * @returns {Element}
 * @constructor
 */
function CookieConsentBanner(props) {

    //to manage when preferences need to be shown or not
    const [showPreferences, setShowPreferences] = useState(false);

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

                    <br/>
                    <br/>

                    {
                        showPreferences &&
                            //add a switch container for each cookie to manage
                            COOKIES.map((cookie) => (
                                <CookieSwitchContainer
                                    type={cookie.type}
                                    text={cookie.text}
                                    disabled={cookie.disabled}
                                    checked={cookie.checked ? cookie.checked : props.tempPreferences}
                                    tempPreferences={props.tempPreferences}
                                    setTempPreferences={props.setTempPreferences}/>
                            ))
                    }

                    {
                        showPreferences ?
                            //save preferences button
                            <CustomButton
                                text="Salva preferenze"
                                onClick={props.handleSavePreferences}
                                style={{fontSize: 'var(--caption_text_font_size)'}} />
                        :
                            //manage preferences button
                            <CustomButton
                                text="Gestisci preferenze >"
                                onClick={() => setShowPreferences(true)}
                                style={{ fontSize: 'var(--caption_text_font_size)' }} />
                    }

                </CookieConsent>

            )}
        </>
    )
}

export default CookieConsentBanner;