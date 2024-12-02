import './App.css';
import { Anchor, FloatButton } from 'antd';
import Home from './Home';
import ChiSiamo from './ChiSiamo';
import { WhatsAppOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WHATSAPP_LINK } from './constants';
import React from "react";

//definition of the section of the website
const sections = [
    { id: 'home-container', title: 'Home' },
    { id: 'chi-siamo-container', title: 'Chi siamo' },
    { id: 'servizi-container', title: 'Servizi' },
    { id: 'dove-siamo-container', title: 'Dove siamo' },
    { id: 'contatti-container', title: 'Contatti' }
];

/**
 * Method to animate the transition to a section
 * @param sectionId
 */
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Method to generate the menu items
 * @type {{onClick: function(): void, href: string, title: *, key: string}[]}
 */
const menuItems = sections.map((section, index) => ({
    key: `${index + 1}`,
    href: `#${section.id}`,
    title: section.title,
    onClick: () => scrollToSection(section.id)
}));

function App() {
    return (
        <>
            {/* WhatsApp support button */}
            <FloatButton
                id="support-button"
                className="support-button"
                icon={<WhatsAppOutlined style={{ color: 'white' }}/>}
                style={{ insetInlineEnd: 24, backgroundColor:'#25d366'}}
                type="secondary"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            />

            {/* Menu */}
            <div className="menu-container">
                <Anchor
                    affix={false}
                    items={menuItems}
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