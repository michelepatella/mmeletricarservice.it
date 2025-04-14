import { useState, useEffect } from "react";
import Cookies from "js-cookie";

/**
 * Custom hook to manage cookie consent
 * @returns {{handleDeclineCookies: handleDeclineCookies, handleAcceptCookies: handleAcceptCookies, cookiesAccepted: unknown, isCookiesBannerVisible: boolean, setIsCookiesBannerVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void}}
 */
export const useCookieConsent = () => {

    const [cookiesAccepted, setCookiesAccepted] = useState(null);
    const [isCookiesBannerVisible, setIsCookiesBannerVisible] = useState(false);

    /**
     * To check consent status
     */
    useEffect(() => {
        const cookieConsent = Cookies.get('cookieConsent');
        if (cookieConsent === 'true') {
            setCookiesAccepted(true);
        } else if (cookieConsent === 'false') {
            setCookiesAccepted(false);
        } else {
            setIsCookiesBannerVisible(true);
            setCookiesAccepted(false);
        }
    }, []);

    /**
     * To manage cookie accepting
     */
    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        setIsCookiesBannerVisible(false);
    };

    /**
     * To manage cookie declining
     */
    const handleDeclineCookies = () => {

        //establish if the page needs to be refreshed
        //depending on the current cookie accepting state
        let isRefreshNeeded = false;
        if (cookiesAccepted) {
            isRefreshNeeded = true;
        }
        setCookiesAccepted(false);
        setIsCookiesBannerVisible(false);

        //refresh the page, if needed
        if (isRefreshNeeded) {
            window.location.reload();
        }

    };

    return {
        cookiesAccepted,
        isCookiesBannerVisible,
        handleAcceptCookies,
        handleDeclineCookies,
        setIsCookiesBannerVisible
    };
};

/**
 * To handle the cookie button clicking
 */
export const handleCookieButtonClick = (setIsCookiesBannerVisible) => {
    setIsCookiesBannerVisible(true);
};