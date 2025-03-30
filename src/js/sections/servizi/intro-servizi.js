import React, { useRef } from "react";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../../utils/constants";
import { scrollToSection } from "../../utils/scrollToSection";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomImageContainer from "../../components/custom/CustomImageContainer";
import '../../../styles/sections/intro-servizi.css';
import '../../../styles/components/custom/CustomImageContainer.css';

/**
 * "Intro servizi" section
 * @returns {Element}
 * @constructor
 */
function IntroServizi() {

    //IntersectionObserver to generate the animation when the section is visible
    const imageRef = useRef(null);
    useIntersectionObserver(imageRef);

    return (

        <>
            <CustomSectionContainer id="intro-servizi">

                {/* Title */}
                <CustomText
                    type="title"
                    text={INTRO_SERVIZI_TITLE}/>

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={INTRO_SERVIZI_DESCRIPTION}/>

                {/* "Intro servizi" image */}
                <CustomImageContainer src="/images/intro-servizi-image.jpg"/>

            </CustomSectionContainer>

            {/* Arrow and label container to navigate to the "Altri servizi" section */}
            <div className="arrow-and-label-container">

                {/* Label */}
                <CustomText
                    type="description"
                    style={{color: 'var(--accent_color)'}}
                    text={ARROW_LABEL}/>

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