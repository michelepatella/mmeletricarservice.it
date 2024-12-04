import '../css/NostriValori.css';
import React from "react";
import { motion } from "framer-motion";

/**
 * This component contains the i nostri valori section, subsection of chi siamo
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    //variants for the animation
    const descriptionVariants = {
        offscreen: {
            opacity: 0,
            x: 20
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 0.4
            }
        }
    };

    return (
        <>
            {/* Nostri valori description definition */}
            <div id="nostri-valori" className="nostri-valori-container">
                <motion.div
                    id="nostri-valori-description"
                    className="nostri-valori-description"
                    variants={descriptionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    {/* Title */}
                    <h2>I nostri valori</h2>

                    {/* Description */}
                    <p>In MM Eletricar Service, crediamo che ogni veicolo meriti <strong>attenzione</strong> e <strong>cura</strong>,
                        poiché comprendiamo quanto sia importante per i nostri clienti.
                        La nostra missione è offrire <strong>soluzioni su misura</strong>, <strong>affidabili</strong> e
                        di <strong>qualità</strong>, per garantire la <strong>sicurezza</strong>,
                        <strong> l’efficienza</strong> e la <strong>soddisfazione</strong> completa di chi si affida a noi.
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default NostriValori;