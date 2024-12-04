import '../css/ChiSiamo.css';
import React from "react";
import { motion } from "framer-motion";

function ChiSiamo() {
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
                    <h2>MM Eletricar Service</h2>

                    {/* Description */}
                    <p>
                        Siamo <strong>Michele Vacca</strong> e <strong>Michele Scalese</strong>, fondatori di MM Eletricar Service,
                        un’officina specializzata in elettronica per autoveicoli. Con sede a Gravina in Puglia (BA),
                        offriamo servizi per garantire sicurezza, affidabilità e prestazioni ottimali ad ogni veicolo.
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default ChiSiamo;