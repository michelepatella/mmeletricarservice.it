import '../css/App.css';
import '../css/variables/colorsVariables.css';
import '../css/variables/fontSizeVariables.css';
import '../css/variables/homeVariables.css';
import '../css/variables/whatsappButtonVariables.css';
import '../css/variables/customButtonVariables.css';
import '../css/variables/contattiVariables.css';
import '../css/variables/altriServiziVariables.css';
import '../css/variables/autoUsateVariables.css';
import '../css/variables/generalMarginsVariables.css';
import '../css/variables/altriServiziAndDoveSiamoDivVariables.css';
import '../css/other/WhatsappSupportButton.css';
import '../css/variables/menuVariables.css';
import React from "react";
import Home from './home/Home';
import ChiSiamo from './chi siamo/ChiSiamo';
import Menu from './menu/Menu';
import NostriValori from './chi siamo/NostriValori';
import IntroServizi from "./servizi/IntroServizi";
import AltriServizi from "./servizi/AltriServizi";
import Contatti from './contatti/Contatti';
import AutoUsate from "./servizi/auto usate/AutoUsate";
import DoveSiamo from "./dove siamo/DoveSiamo";
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WHATSAPP_LINK } from './utility/constants';
import {FloatButton} from "antd";
import CookieConsent from "react-cookie-consent";

/**
 * This component contains all the sections of the web page and
 * all the variables components
 * @returns {Element}
 * @constructor
 */
function App() {

    return (

        <>
            {/* Cookie Consent Banner */}
            <CookieConsent
                location="bottom"
                buttonText="Accetto"
                cookieName="user-consent"
                style={{
                    background: "#2B373B",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "10px",
                    textAlign: "center",
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    zIndex: "9999",
                }}
                buttonStyle={{
                    background: "#4CAF50",
                    color: "white",
                    fontSize: "14px",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                }}
                declineButtonStyle={{
                    background: "#FF5722",
                    color: "white",
                    fontSize: "14px",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                }}
                expires={365}
            >
                Questo sito utilizza i cookie per migliorare l'esperienza di navigazione. Per maggiori informazioni, consulta la nostra <a href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> e la <a href="/cookie-policy" style={{ color: '#fff' }}>Cookie Policy</a>.
            </CookieConsent>

            {/* WhatsApp support button */}
            <FloatButton
                id="support-button"
                className="support-button"
                icon={<WhatsAppOutlined style={{color: 'white'}}/>}
                type="secondary"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            />

            {/*Integration of the menu*/}
            <Menu/>

            {/*Make the home page of the website the element home*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>

            {/*Integration of Chi Siamo section*/}
            <ChiSiamo/>

            {/*Integration of Nostri valori section*/}
            <NostriValori/>x

            {/*Integration of Intro Servizi section*/}
            <IntroServizi/>

            {/*Integration of Altri Servizi section*/}
            <AltriServizi/>

            {/*Integration of Auto usate section*/}
            <AutoUsate/>

            {/*Integration of Dove siamo section*/}
            <DoveSiamo/>

            {/*Integration of Contatti section*/}
            <Contatti/>

        </>
    );
}

export default App;