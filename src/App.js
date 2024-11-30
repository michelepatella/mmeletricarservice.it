import './App.css';
import { Anchor } from 'antd';
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
            <div id="home-container" className="home-container">
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

                <div className="title-container">
                    <h1 className="home-title">Dove la tua auto<br/>trova l'eccellenza.</h1>
                    <h2 className="home-description">
                        Benvenuto nell'officina <br/> <strong>MM Eletricar Service!</strong>
                    </h2>
                </div>
            </div>

            <div id="chi-siamo-container" className="chi-siamo-container">
                <div id="chi-siamo-description" className="chi-siamo-description">
                    <h2>MM Eletricar Service</h2>
                    <p>Siamo <strong>Michele Vacca</strong> e <strong>Michele Scalese</strong>, fondatori di MM Eletricar Service,
                        un’officina specializzata in elettronica per autoveicoli. Con sede a Gravina in Puglia (BA),
                        offriamo servizi per garantire sicurezza, affidabilità e prestazioni ottimali a ogni veicolo.
                    </p>
                </div>
            </div>


        </>
    );
}

export default App;