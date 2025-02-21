import '../../../styles/pages/nostri-valori.css';
import React, {useRef} from "react";
import {NOSTRI_VALORI_DESCRIPTION, NOSTRI_VALORI_TITLE} from "../../utility/constants";
import useIntersectionObserver from "../../utility/useIntersectionObserver";
import '../../../styles/variables/imageVariables.css';
import '../../../styles/components/utility/Image.css';

/**
 * That's the "nostri valori" page
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (
        <>
            {/* Title and description division */}
            <div id="nostri-valori" className="nostri-valori-container">

                {/* Title */}
                <h2 className="nostri-valori-title">{NOSTRI_VALORI_TITLE}</h2>

                {/* Description */}
                <p className="nostri-valori-subtitle" ref={subtitleRef}
                   dangerouslySetInnerHTML={{__html: NOSTRI_VALORI_DESCRIPTION}}/>
            </div>

            {/* Image container with the image inside it */}
            <div className="image-container">
                <img src="/images/nostri-valori-image.jpg" ref={imageRef}/>
            </div>
        </>
    );
}

export default NostriValori;