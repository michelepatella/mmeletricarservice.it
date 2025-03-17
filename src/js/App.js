import '../styles/App.css';
import '../styles/variables/colorsVariables.css';
import '../styles/variables/fontSizeVariables.css';
import '../styles/variables/homeVariables.css';
import '../styles/variables/whatsappButtonVariables.css';
import '../styles/variables/customButtonVariables.css';
import '../styles/variables/contattiVariables.css';
import '../styles/variables/altriServiziVariables.css';
import '../styles/variables/autoUsateVariables.css';
import '../styles/variables/generalMarginsVariables.css';
import '../styles/variables/altriServiziAndDoveSiamoDivVariables.css';
import '../styles/components/buttons/WhatsappSupportButton.css';
import '../styles/variables/menuVariables.css';
import '../styles/variables/cookieButtonVariables.css';
import '../styles/components/cookie/CookieButton.css';
import React from "react";
import Home from './pages/home';
import ChiSiamo from './pages/chi siamo/chi-siamo';
import Menu from './components/menu/Menu';
import NostriValori from './pages/chi siamo/nostri-valori';
import IntroServizi from "./pages/servizi/intro-servizi";
import AltriServizi from "./pages/servizi/altri-servizi";
import Contatti from './pages/contatti';
import AutoUsate from "./pages/servizi/auto-usate";
import DoveSiamo from "./pages/dove-siamo";
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WHATSAPP_LINK } from './utils/constants';
import {FloatButton} from "antd";
import { Analytics } from "@vercel/analytics/react"

/**
 * The main page that contains all the subpages of the website
 * @returns {Element}
 * @constructor
 */
function App() {

    return (
        <>
            <Analytics/>
            <Router>
                <>
                    {/*WhatsApp support button*/}
                    {/*<FloatButton
                        id="support-button"
                        className="support-button"
                        icon={<WhatsAppOutlined style={{ color: 'white' }} />}
                        type="secondary"
                        onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    />*/}

                    {/*Integration of the menu*/}
                    <Menu/>

                    {/* Definition of the website routes */}
                    <Routes>
                        {/*Home route*/}
                        <Route path="/" element={<Home />} />

                        {/*Other routes*/}
                        <Route
                            path="/chi-siamo"
                            element={<ChiSiamo/>}
                        />
                        <Route
                            path="/nostri-valori"
                            element={<NostriValori/>}
                        />
                        <Route
                            path="/servizi"
                            element={<IntroServizi/>}
                        />
                        <Route
                            path="/altri-servizi"
                            element={<AltriServizi/>}
                        />
                        <Route
                            path="/auto-usate"
                            element={<AutoUsate/>}
                        />
                        <Route
                            path="/dove-siamo"
                            element={<DoveSiamo/>}
                        />
                        <Route
                            path="/contatti"
                            element={<Contatti/>}
                        />
                    </Routes>

                    <ChiSiamo/>
                    <NostriValori/>
                    <IntroServizi/>
                    <AltriServizi/>
                    <AutoUsate/>
                    <DoveSiamo/>
                    <Contatti/>

                </>
            </Router>
        </>
    );
}

export default App;