import '../../styles/chi siamo/NostriValori.css';
import React, {useRef} from "react";
import {NOSTRI_VALORI_DESCRIPTION, NOSTRI_VALORI_TITLE} from "../utility/constants";
import useIntersectionObserver from "../utility/useIntersectionObserver";
import '../../styles/variables/imageVariables.css';
import '../../styles/other/Image.css';

/**
 * This component contains the i nostri valori section, subsection of chi siamo
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (
        <>
            {/* Nostri valori description definition */}
            <div id="nostri-valori" className="nostri-valori-container">
                {/* Title */}
                <h2 className="nostri-valori-title">{NOSTRI_VALORI_TITLE}</h2>

                {/* Description */}
                <p className="nostri-valori-subtitle" ref={subtitleRef}
                   dangerouslySetInnerHTML={{__html: NOSTRI_VALORI_DESCRIPTION}}/>
            </div>

            <div className="image-container">
                <img src="/images/nostri-valori-image.jpg" ref={imageRef}/>
            </div>
        </>
    );
}

export default NostriValori;