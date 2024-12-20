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
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useIntersectionObserver(titleRef);
    useIntersectionObserver(subtitleRef);

    return (
        <div id="chi-siamo" className="chi-siamo-container">
            {/* Title */}
            <h2 ref={titleRef} className="chi-siamo-title">{CHI_SIAMO_TITLE}</h2>

            {/* Description */}
            <p ref={subtitleRef} className="chi-siamo-subtitle" dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }} />
        </div>
    );
}

export default ChiSiamo;