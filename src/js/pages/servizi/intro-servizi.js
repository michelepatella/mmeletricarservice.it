import '../../../styles/pages/intro-servizi.css';
import React, {useRef} from "react";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../../utility/constants";
import useIntersectionObserver from "../../utility/useIntersectionObserver";
import {scrollToSection} from "../../utility/scrollToSection";
import '../../../styles/variables/imageVariables.css';
import '../../../styles/components/utility/Image.css';

/**
 * That's the (intro) "servizi" page
 * @returns {Element}
 * @constructor
 */
function IntroServizi() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (
        <>
            {/* Title and description division */}
            <div id="intro-servizi" className="intro-servizi-container">

                {/* Title */}
                <h2 className="intro-servizi-title" dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_TITLE}}/>

                {/* Description */}
                <p className="intro-servizi-subtitle" ref={subtitleRef}
                   dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_DESCRIPTION}}/>

            </div>

            {/* Image container */}
            <div className="image-container">
                <img src="/images/intro-servizi-image.jpg" ref={imageRef}/>
            </div>

            {/* Arrow and label division to navigate to the "altri servizi" page */}
            <div className="arrow-and-label-container">
                {/* Label */}
                <p className="arrow-label">{ARROW_LABEL}</p>

                {/* Arrow button */}
                <button className="arrow-button" onClick={() => scrollToSection('altri-servizi', null)}></button>
            </div>

        </>
    );
}

export default IntroServizi;