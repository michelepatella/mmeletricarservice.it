import '../css/NostriValori.css';
import React from "react";

function NostriValori() {

    return (
        <>
            {/*Nostri valori description definition*/}
            <div id="nostri-valori" className="nostri-valori-container">
                <div id="nostri-valori-description" className="nostri-valori-description">

                    {/*Title*/}
                    <h2>I nostri valori</h2>

                    {/*Description*/}
                    <p>In MM Eletricar Service, crediamo che ogni veicolo meriti <strong>attenzione</strong> e <strong>cura</strong>,
                        poiché comprendiamo quanto sia importante per i nostri clienti.
                        La nostra missione è offrire <strong>soluzioni su misura</strong>, <strong>affidabili</strong> e
                        di <strong>qualità</strong>, per garantire la <strong>sicurezza</strong>,
                        <strong>l’efficienza</strong> e la <strong>soddisfazione</strong> completa di chi si affida a noi.
                    </p>

                </div>
            </div>
        </>
    );
}

export default NostriValori;