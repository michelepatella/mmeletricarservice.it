import '../../css/servizi/IntroServizi.css';
import React from "react";
import { motion } from "framer-motion";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../constants";

/**
 * This component contains the intro servizi section
 * @returns {Element}
 * @constructor
 */
function IntroServizi() {

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
            {/* Intro servizi description definition */}
            <div id="intro-servizi" className="intro-servizi-container">
                <motion.div
                    id="intro-servizi-description"
                    className="intro-servizi-description"
                    variants={descriptionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    {/* Title */}
                    <h2 dangerouslySetInnerHTML={{ __html: INTRO_SERVIZI_TITLE }}/>

                    {/* Description */}
                    <p dangerouslySetInnerHTML={{ __html: INTRO_SERVIZI_DESCRIPTION }}/>
                </motion.div>
            </div>

            <div className="arrow-and-label-container">
                {/*Arrow label and arrow for going to the next section*/}
                <p className="arrow-label">{ARROW_LABEL}</p>
                <button className="arrow-button"></button>
            </div>
        </>
    );
}

export default IntroServizi;