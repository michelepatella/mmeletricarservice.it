import '../../css/dove siamo/DoveSiamo.css';
import '../../css/other/CookieBanner.css';
import '../../css/variables/cookiesBannerVariables.css';
import {Button, Row, Switch} from "antd";
import {DOVE_SIAMO_DIVISIONS, DOVE_SIAMO_TITLE} from "../utility/constants";
import CookieConsent from "react-cookie-consent";
import DivDoveSiamo from "./DivDoveSiamo";
import Cookies from 'js-cookie';
import React, {useEffect, useState} from "react";

/**
 * This component contains the dove siamo section
 * @returns {Element}
 * @constructor
 */
function DoveSiamo() {

    const [cookiesAccepted, setCookiesAccepted] = useState(null);
    const [isCookiesBannerVisible, setIsCookiesBannerVisible] = useState(false);

    /**
     * Method to check if the cookies have already been accepted or not
     */
    useEffect(() => {

        //read the cookie called cookieConsent
        const cookieConsent = Cookies.get('cookieConsent');

        //check its value, set the cookiesAccepted variables and show the cookies banner if necessary
        if (cookieConsent === 'true')
            setCookiesAccepted(true);
        else
            if (cookieConsent === 'false')
                setCookiesAccepted(false);
            else
                setIsCookiesBannerVisible(true);

    }, []);

    /**
     * Method to handle the accepting of the cookies
     */
    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        setIsCookiesBannerVisible(false);
    };

    /**
     * Method to handle the declining of the cookies
     */
    const handleDeclineCookies = () => {
        setCookiesAccepted(false);
        setIsCookiesBannerVisible(false);
        window.location.reload();
    };

    /**
     * Method to handle clicking on the cookies button
     */
    const handleCookieButtonClick = () => {
        setIsCookiesBannerVisible(true);
    };

    /**
     * Method to handle clicking on the save preferences button
     */
    const handleCookiesPreferencesButtonClick = () => {
        Cookies.set('cookieConsent', cookiesAccepted ? 'true' : 'false', {expires: 30});
        setIsCookiesBannerVisible(false);

        if(!cookiesAccepted)
            window.location.reload();
    }

    return (
        <div id="dove-siamo" className="dove-siamo-container">

            {/*Cookies button */}
            <Button className="cookie-button" onClick={handleCookieButtonClick} />

            {/* Title */}
            <h2 className="dove-siamo-title">{DOVE_SIAMO_TITLE}</h2>

            <Row className="dove-siamo-main-container">
                <Row className="dove-siamo-grid">
                    {DOVE_SIAMO_DIVISIONS.map((doveSiamoDivision, index) => (
                        <DivDoveSiamo
                            key={index}
                            title={doveSiamoDivision.title}
                            description={doveSiamoDivision.description}
                            icon={doveSiamoDivision.icon}
                        />
                    ))}

                    {/*Google Maps (shown only in case of cookie accepting)*/}
                    {cookiesAccepted && (
                        <div className="google-map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title="google-maps"
                                className="google-maps-iframe">
                            </iframe>
                        </div>
                    )}
                </Row>
            </Row>

            {/*Banner for consenting/declining cookies and manage them*/}
            { isCookiesBannerVisible &&
                <CookieConsent
                    location="bottom"
                    buttonText="Accetta tutti"
                    className="cookies-banner"
                    declineButtonText="Rifiuta tutti"
                    cookieName="cookieConsent"
                    style={{
                        zIndex: 9999999,
                        background: "#141414",
                        color: "white",
                        fontFamily: 'Poppins',
                        padding: "10px",
                        fontSize: "14px",
                    }}
                    buttonStyle={{
                        background: "#F8DE4D",
                        color: "black",
                        fontFamily: 'Poppins',
                        fontSize: "14px",
                        padding: "10px 20px",
                        borderRadius: "10px"
                    }}
                    declineButtonStyle={{
                        background: "#F8DE4D",
                        color: "black",
                        fontFamily: 'Poppins',
                        fontSize: "14px",
                        padding: "10px 20px",
                        borderRadius: "10px"
                    }}
                    expires={30}
                    enableDeclineButton={true}
                    visible={true}
                    onAccept={handleAcceptCookies}
                    onDecline={handleDeclineCookies}
                >
                    Questo sito utilizza i <strong>cookie</strong>.
                    Cliccando su "Accetta", acconsenti all'uso dei cookie.
                    Cliccando su "Rifiuta", rifiuti l'uso dei cookie.
                    Per maggiori informazioni consulta la nostra <a href="#privacy-policy" className="privacy-policy-link">
                    Privacy Policy
                </a>
                    🍪

                    {/*Switch for technique and security cookies*/}
                    <div className="div-necessary-cookies">
                        <Switch
                            checked={true}
                            disabled
                            style={{backgroundColor: '#F8DE4D'}}
                        />
                        <p className="cookies-switch-label">Cookies tecnici e di sicurezza</p>
                    </div>

                    {/*Switch for third-party cookies*/}
                    <div className="div-third-party-cookies">
                        <Switch
                            checked={cookiesAccepted}
                            onChange={() => setCookiesAccepted(!cookiesAccepted)}
                            style={{backgroundColor: cookiesAccepted ? '#F8DE4D' : '#3C3C3C'}}
                        />
                        <p className="cookies-switch-label">Cookies di terze parti</p>
                    </div>

                    {/* Save preferences button */}
                    <Button className="save-preferences-button" onClick={() => handleCookiesPreferencesButtonClick()}>
                        Salva preferenze
                    </Button>

                </CookieConsent>
            }
        </div>
    );
}

export default DoveSiamo;