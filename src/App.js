import './App.css';
import {Anchor, FloatButton} from 'antd';
import Home from './Home';
import ChiSiamo from './ChiSiamo';
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <FloatButton
                id="support-button"
                className="support-button"
                icon={<WhatsAppOutlined/>}
                tooltip="Ciao, come posso aiutarti?"
                style={{ insetInlineEnd: 24 }}
                onClick={() => console.log('onClick')}
            >
            </FloatButton>

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

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>

            <ChiSiamo/>
        </>
    );
}

export default App;