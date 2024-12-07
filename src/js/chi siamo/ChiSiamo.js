import '../../css/chi siamo/ChiSiamo.css';
import React from "react";
import { motion } from "framer-motion";
import {CHI_SIAMO_DESCRIPTION, CHI_SIAMO_TITLE} from "../constants";

/**
 * This component contains the chi siamo section
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

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
            {/* Chi siamo description definition */}
            <div id="chi-siamo" className="chi-siamo-container">
                <motion.div
                    id="chi-siamo-description"
                    className="chi-siamo-description"
                    variants={descriptionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    {/* Title */}
                    <h2>{CHI_SIAMO_TITLE}</h2>

                    {/* Description */}
                    <p dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }}/>

                </motion.div>
            </div>
        </>
    );
}

export default ChiSiamo;