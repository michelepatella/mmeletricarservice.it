import './ChiSiamo.css';
import React from "react";

function ChiSiamo() {

    return (
        <>
            {/*Chi siamo description definition*/}
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

export default ChiSiamo;