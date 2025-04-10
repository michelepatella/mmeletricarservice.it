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
import '../index.css';
import '../styles/App.css';
import '../styles/sections/home.css';
import '../styles/sections/about-us.css';
import '../styles/sections/used-cars.css';
import '../styles/sections/where-we-are.css';
import '../styles/sections/contacts.css';
import '../styles/components/home/HomeHeader.css';
import '../styles/components/custom/CustomButton.css';
import '../styles/components/home/HomeContent.css';
import '../styles/components/custom/CustomInfoCard.css';
import "../styles/components/contacts/ContactsContent.css";
import '../styles/components/custom/CustomCookieButton.css';
import '../styles/components/custom/CustomCookieConsentBanner.css';
import '../styles/components/contacts/ContactsFooter.css';
import '../styles/components/custom/CustomIconButton.css';
import '../styles/components/custom/CustomSectionContainer.css';
import '../styles/components/custom/CustomSectionHeader.css';
import '../styles/components/custom/CustomText.css';
import '../styles/components/custom/CustomTechInfoCard.css';
import '../styles/components/custom/CustomUsedCarCard.css';
import '../styles/components/custom/CustomUsedCarDrawer.css';
import '../styles/components/Menu.css';
import '../styles/variables.css';

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