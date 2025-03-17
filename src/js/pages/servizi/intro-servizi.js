import '../../../styles/pages/intro-servizi.css';
import '../../../styles/variables/imageVariables.css';
import '../../../styles/components/utility/Image.css';
import React, {useRef} from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {scrollToSection} from "../../utils/scrollToSection";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../../utils/constants";

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
            <div
                id="intro-servizi"
                className="intro-servizi-container">

                {/* Title */}
                <h2
                    className="intro-servizi-title"
                    dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_TITLE}}/>

                {/* Description */}
                <p
                    className="intro-servizi-subtitle"
                    ref={subtitleRef}
                    dangerouslySetInnerHTML={{__html: INTRO_SERVIZI_DESCRIPTION}}/>

            </div>

            {/* Image container */}
            <div className="image-container">
                <img
                    src="/images/intro-servizi-image.jpg"
                    ref={imageRef}/>
            </div>

            {/* Arrow and label division to navigate to the "altri servizi" page */}
            <div className="arrow-and-label-container">
                {/* Label */}
                <p className="arrow-label">{
                    ARROW_LABEL}
                </p>

                {/* Arrow button */}
                <button
                    className="arrow-button"
                    onClick={() => scrollToSection('altri-servizi', null)}>
                </button>
            </div>

        </>
    );
}

export default IntroServizi;