import '../../styles/chi siamo/ChiSiamo.css';
import React, { useEffect, useRef, useState } from "react";
import { CHI_SIAMO_DESCRIPTION, CHI_SIAMO_TITLE } from "../utility/constants";
import useIntersectionObserver from "../utility/useIntersectionObserver";
import '../../styles/other/Image.css';
import '../../styles/variables/imageVariables.css';

/**
 * This component contains the chi siamo section
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);

    useIntersectionObserver(subtitleRef);
    //IntersectionObsever to keep track if the section is visible or not, to start the video
    const isVideoVisible= useIntersectionObserver(imageRef);

    /**
     * To delay the logo animation
     */
    useEffect(() => {
        if (isVideoVisible) {
            const timer = setTimeout(() => {
                videoRef.current.play();
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [isVideoVisible]);

    return (
        <>
            <div id="chi-siamo" className="chi-siamo-container">
                {/* Titolo */}
                <h2 className="chi-siamo-title">{CHI_SIAMO_TITLE}</h2>

                {/* Descrizione */}
                <p ref={subtitleRef} className="chi-siamo-subtitle"
                   dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }} />
            </div>

            <div className="image-container" ref={imageRef}>
                <video
                    src="/images/animation-logo.mp4"
                    ref={videoRef}
                    type="video/mp4"
                    className="logo-animation"
                    loop={false}
                    muted
                    playsInline
                    controls={false}
                />
            </div>
        </>
    );
}

export default ChiSiamo;