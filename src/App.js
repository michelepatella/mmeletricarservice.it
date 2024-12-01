import './App.css';
import {Anchor, FloatButton} from 'antd';
import Home from './Home';
import ChiSiamo from './ChiSiamo';
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WHATSAPP_LINK } from './constants';
import React from "react";

function App() {
    /**
     * Method to animate the transaction from a section to another one
     * @param sectionId
     */
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Whatsapp support button definition*/}
            <FloatButton
                id="support-button"
                className="support-button"
                icon={<WhatsAppOutlined style={{ color: 'white' }}/>}
                style={{ insetInlineEnd: 24, backgroundColor:'#25d366'}}
                type="secondary"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
            </FloatButton>

            {/*Menù definition*/}
            <div className="menu-container">
                <Anchor
                    affix={false}
                    items={[
                        {
                            key: '1',
                            href: '#home-container',
                            title: 'Home',
                            onClick: () => scrollToSection('home-container')
                        },
                        {
                            key: '2',
                            href: '#chi-siamo-container',
                            title: 'Chi siamo',
                            onClick: () => scrollToSection('chi-siamo-container')
                        },
                        {
                            key: '3',
                            href: '#servizi',
                            title: 'Servizi',

                        },
                        {
                            key: '4',
                            href: '#dove_siamo',
                            title: 'Dove siamo',

                        },
                        {
                            key: '5',
                            href: '#contatti',
                            title: 'Contatti',

                        }
                    ]}
                />
            </div>

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