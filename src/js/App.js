import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import {Button} from "antd";
import {handleCookieButtonClick, useCookieConsent} from "./hooks/useCookieConsent";
import Home from './sections/home';
import ChiSiamo from './sections/chi siamo/chi-siamo';
import NostriValori from './sections/chi siamo/nostri-valori';
import IntroServizi from "./sections/servizi/intro-servizi";
import AltriServizi from "./sections/servizi/altri-servizi";
import AutoUsate from "./sections/servizi/auto-usate";
import DoveSiamo from "./sections/dove-siamo";
import Contatti from './sections/contatti';
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
                        handleSavePreferences={handleSavePreferences}/>

                    {/* Menu */}
                    <Menu/>

                    {/* Definition of the website routes */}
                    <Routes>

                        {/* Home */}
                        <Route path="/" element={<Home />}/>

                        {/* Chi siamo */}
                        <Route
                            path="/chi-siamo"
                            element={<ChiSiamo/>}/>

                        {/* Nostri valori */}
                        <Route
                            path="/nostri-valori"
                            element={<NostriValori/>}/>

                        {/* Servizi */}
                        <Route
                            path="/servizi"
                            element={<IntroServizi/>}/>

                        {/* Altri servizi */}
                        <Route
                            path="/altri-servizi"
                            element={<AltriServizi/>}/>

                        {/* Auto usate */}
                        <Route
                            path="/auto-usate"
                            element={<AutoUsate/>}/>

                        {/* Dove siamo */}
                        <Route
                            path="/dove-siamo"
                            element={<DoveSiamo cookiesAccepted={cookiesAccepted}/>}/>

                        {/* Contatti */}
                        <Route
                            path="/contatti"
                            element={<Contatti/>}/>

                    </Routes>

                    <ChiSiamo/>
                    <NostriValori/>
                    <IntroServizi/>
                    <AltriServizi/>
                    <AutoUsate/>
                    <DoveSiamo cookiesAccepted={cookiesAccepted}/>
                    <Contatti/>

                </>
            </Router>
        </>
    );
}

export default App;