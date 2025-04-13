import React from "react";
import {HashRouter} from "react-router-dom";
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
import CookieConsentBanner from "./components/cookie/CookieConsentBanner";
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
import "../styles/components/contacts/ContactsContent.css";
import '../styles/components/contacts/ContactsFooter.css';
import '../styles/components/cookie/CookieButton.css';
import '../styles/components/cookie/CookieConsentBanner.css';
import '../styles/components/custom/CustomIconButton.css';
import '../styles/components/custom/CustomText.css';
import '../styles/components/custom/CustomBackButton.css';
import '../styles/components/sections/SectionContainer.css';
import '../styles/components/sections/SectionHeader.css';
import '../styles/components/used-cars/UsedCarOverview.css';
import '../styles/components/used-cars/UsedCarCard.css';
import '../styles/components/used-cars/UsedCarDrawer.css';
import '../styles/components/used-cars/drawer/UsedCarDrawerCarousel.css';
import '../styles/components/other/Menu.css';
import '../styles/components/other/InfoCard.css';
import '../styles/components/other/LoadingOutlined.css';
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
            <HashRouter>
                <>

                    {/* Cookies button */}
                    <Button
                        className="cookie-button"
                        onClick={() => handleCookieButtonClick(setIsCookiesBannerVisible)} />

                    {/* Cookie Consent Banner */}
                    <CookieConsentBanner
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
            </HashRouter>
        </>
    );
}

export default App;