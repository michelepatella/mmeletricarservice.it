import '../../styles/chi siamo/ChiSiamo.css';
import React, { useRef } from "react";
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
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef)

    return (
        <>
            <div id="chi-siamo" className="chi-siamo-container">
                {/* Title */}
                <h2 className="chi-siamo-title">{CHI_SIAMO_TITLE}</h2>

                {/* Description */}
                <p ref={subtitleRef} className="chi-siamo-subtitle"
                   dangerouslySetInnerHTML={{__html: CHI_SIAMO_DESCRIPTION}}/>
            </div>

            <div className="image-container">
                <img src="/images/chi-siamo-image.jpeg" ref={imageRef}/>
            </div>

        </>
    )
        ;
}

export default ChiSiamo;