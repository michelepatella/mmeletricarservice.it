import '../../css/servizi/IntroServizi.css';
import React, {useRef} from "react";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../utility/constants";
import useIntersectionObserver from "../utility/useIntersectionObserver";
import {scrollToSection} from "../utility/scrollToSection";
import '../../css/variables/imageVariables.css';
import '../../css/other/Image.css';

/**
 * This component contains the intro servizi section
 * @returns {Element}
 * @constructor
 */
function IntroServizi() {

    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (
        <>
            {/* Intro servizi description definition */}
            <div id="intro-servizi" className="intro-servizi-container">
                {/* Title */}
                <h2 className="intro-servizi-title" dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_TITLE}}/>

                {/* Description */}
                <p className="intro-servizi-subtitle" ref={subtitleRef}
                   dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_DESCRIPTION}}/>
            </div>

            <div className="image-container">
                <img src="/images/intro-servizi-image.jpeg" ref={imageRef}/>
            </div>

            <div className="arrow-and-label-container">
                {/*Arrow label and arrow for going to the next section*/}
                <p className="arrow-label">{ARROW_LABEL}</p>
                <button className="arrow-button" onClick={() => scrollToSection('altri-servizi', null)}></button>
            </div>

        </>
    );
}

export default IntroServizi;