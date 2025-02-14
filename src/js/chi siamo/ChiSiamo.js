import '../../css/chi siamo/ChiSiamo.css';
import React, { useRef } from "react";
import { CHI_SIAMO_DESCRIPTION, CHI_SIAMO_TITLE } from "../utility/constants";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component contains the chi siamo section
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <div id="chi-siamo" className="chi-siamo-container">
            {/* Title */}
            <h2 className="chi-siamo-title">{CHI_SIAMO_TITLE}</h2>

            {/* Description */}
            <p ref={subtitleRef} className="chi-siamo-subtitle"
               dangerouslySetInnerHTML={{__html: CHI_SIAMO_DESCRIPTION}}/>

            <div className="home-image-container">
                <img src="/images/home-image.jpeg"/>
            </div>

        </div>
    );
}

export default ChiSiamo;