import '../../css/chi siamo/NostriValori.css';
import React from "react";
import { motion } from "framer-motion";
import {NOSTRI_VALORI_DESCRIPTION, NOSTRI_VALORI_TITLE} from "../constants";

/**
 * This component contains the i nostri valori section, subsection of chi siamo
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    /**
     * Variants for the animation
     * @type {{offscreen: {x: number, opacity: number}, onscreen: {x: number, opacity: number, transition: {duration: number, bounce: number, type: string}}}}
     */
    const descriptionVariants = {
        offscreen: {
            opacity: 0,
            y: -20
        },
        onscreen: {
            opacity: 1,
            y: 65,
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
                    <h2>{NOSTRI_VALORI_TITLE}</h2>

                    {/* Description */}
                    <p dangerouslySetInnerHTML={{ __html: NOSTRI_VALORI_DESCRIPTION }} />
                </motion.div>
            </div>
        </>
    );
}

export default NostriValori;