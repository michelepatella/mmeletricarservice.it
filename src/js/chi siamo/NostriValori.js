import '../../css/chi siamo/NostriValori.css';
import React, {useRef} from "react";
import {NOSTRI_VALORI_DESCRIPTION, NOSTRI_VALORI_TITLE} from "../utility/constants";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component contains the i nostri valori section, subsection of chi siamo
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            {/* Nostri valori description definition */}
            <div id="nostri-valori" className="nostri-valori-container">
                {/* Title */}
                <h2 className="nostri-valori-title">{NOSTRI_VALORI_TITLE}</h2>

                {/* Description */}
                <p className="nostri-valori-subtitle" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: NOSTRI_VALORI_DESCRIPTION }} />
            </div>
        </>
    );
}

export default NostriValori;