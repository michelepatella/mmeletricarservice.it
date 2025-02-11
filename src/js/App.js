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
import '../css/variables/cookieButtonVariables.css';
import '../css/other/CookieButton.css';
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

/**
 * This component contains all the sections of the web page and
 * all the variables components
 * @returns {Element}
 * @constructor
 */
function App() {



    return (
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

                <Routes>
                    {/*Home route*/}
                    <Route path="/" element={<Home />} />

                    {/*Other routes*/}
                    <Route path="/chi-siamo" element={<ChiSiamo/>} />
                    <Route path="/nostri-valori" element={<NostriValori/>} />
                    <Route path="/servizi" element={<IntroServizi/>} />
                    <Route path="/altri-servizi" element={<AltriServizi/>} />
                    <Route path="/auto-usate" element={<AutoUsate/>} />
                    <Route path="/dove-siamo" element={<DoveSiamo/>} />
                    <Route path="/contatti" element={<Contatti/>} />
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
    );
}

export default App;