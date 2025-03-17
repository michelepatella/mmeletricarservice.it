import { useState, useEffect } from "react";
import Cookies from "js-cookie";

/**
 * To manage cookie consent
 * @returns {{handleDeclineCookies: handleDeclineCookies, handleAcceptCookies: handleAcceptCookies, cookiesAccepted: unknown, tempPreferences: unknown, handleSavePreferences: handleSavePreferences, setTempPreferences: (value: unknown) => void, isCookiesBannerVisible: boolean, setIsCookiesBannerVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void}}
 */
export const useCookieConsent = () => {

    const [cookiesAccepted, setCookiesAccepted] = useState(null);
    const [tempPreferences, setTempPreferences] = useState(null);
    const [isCookiesBannerVisible, setIsCookiesBannerVisible] = useState(false);

    /**
     * To check consent status
     */
    useEffect(() => {
        const cookieConsent = Cookies.get('cookieConsent');
        if (cookieConsent === 'true') {
            setCookiesAccepted(true);
            setTempPreferences(true);
        } else if (cookieConsent === 'false') {
            setCookiesAccepted(false);
            setTempPreferences(false);
        } else {
            setIsCookiesBannerVisible(true);
            setCookiesAccepted(false);
            setTempPreferences(false);
        }
    }, []);

    /**
     * Manage cookie accepting
     */
    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        setTempPreferences(true);
        setIsCookiesBannerVisible(false);
    };

    /**
     * Manage cookie declining
     */
    const handleDeclineCookies = () => {
        setCookiesAccepted(false);
        setTempPreferences(false);
        setIsCookiesBannerVisible(false);
        window.location.reload();
    };

    /**
     * Manage cookie preferences saving
     */
    const handleSavePreferences = () => {
        Cookies.set(
            'cookieConsent',
            tempPreferences ? 'true' : 'false',
            { expires: 30 }
        );
        setCookiesAccepted(tempPreferences);
        setIsCookiesBannerVisible(false);
        if (!tempPreferences) window.location.reload();
    };

    return {
        cookiesAccepted,
        tempPreferences,
        isCookiesBannerVisible,
        handleAcceptCookies,
        handleDeclineCookies,
        handleSavePreferences,
        setTempPreferences,
        setIsCookiesBannerVisible
    };
};

/**
 * Handle the cookie button clicking
 */
export const handleCookieButtonClick = (setIsCookiesBannerVisible) => {
    setIsCookiesBannerVisible(true);
};