import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import {Button} from "antd";
import {handleCookieButtonClick, useCookieConsent} from "./hooks/useCookieConsent";
import Home from './sections/home';
import AboutUs from './sections/about-us/about-us';
import OurValues from './sections/about-us/our-values';
import Services from "./sections/services/services";
import AllServices from "./sections/services/all-services";
import UsedCars from "./sections/services/used-cars";
import WhereWeAre from "./sections/where-we-are";
import Contacts from './sections/contacts';
import Menu from './components/menu/Menu';
import CustomCookieConsentBanner from "./components/custom/CustomCookieConsentBanner";
import '../styles/App.css';

/**
 * App
 * @returns {Element}
 * @constructor
 */
function App() {

    const {
        cookiesAccepted,
        tempPreferences,
        isCookiesBannerVisible,
        handleAcceptCookies,
        handleDeclineCookies,
        handleSavePreferences,
        setTempPreferences,
        setIsCookiesBannerVisible
    } = useCookieConsent();

    return (
        <>
            <Analytics/>
            <Router>
                <>

                    {/* Cookies button */}
                    <Button
                        className="cookie-button"
                        onClick={() => handleCookieButtonClick(setIsCookiesBannerVisible)} />

                    {/* Custom Cookie Consent Banner */}
                    <CustomCookieConsentBanner
                        isCookiesBannerVisible={isCookiesBannerVisible}
                        handleAcceptCookies={handleAcceptCookies}
                        handleDeclineCookies={handleDeclineCookies}
                        tempPreferences={tempPreferences}
                        setTempPreferences={setTempPreferences}
                        handleSavePreferences={handleSavePreferences} />

                    {/* Menu */}
                    <Menu/>

                    {/* Sections */}
                    <Home/>
                    <AboutUs/>
                    <OurValues/>
                    <Services/>
                    <AllServices/>
                    <UsedCars/>
                    <WhereWeAre cookiesAccepted={cookiesAccepted} />
                    <Contacts/>

                </>
            </Router>
        </>
    );
}

export default App;