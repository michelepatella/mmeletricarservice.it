import '../css/App.css';
import React from "react";
import Home from './Home';
import ChiSiamo from './ChiSiamo';
import Menu from './Menu';
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WHATSAPP_LINK } from './constants';
import {FloatButton} from "antd";

/**
 * This component contains all the sections of the web page and
 * all the global components
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
                style={{insetInlineEnd: 24, backgroundColor: '#25d366'}}
                type="secondary"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            />

            {/*Integration of the menu*/}
            <Menu/>

            {/*Make the home page of the website the element Home*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>

            {/*Integration of Chi Siamo section*/}
            <ChiSiamo/>

        </>
    );
}

export default App;