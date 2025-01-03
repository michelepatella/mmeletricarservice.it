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

/**
 * This component contains all the sections of the web page and
 * all the variables components
 * @returns {Element}
 * @constructor
 */
function App() {

    return (

        <>
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
            <NostriValori/>

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