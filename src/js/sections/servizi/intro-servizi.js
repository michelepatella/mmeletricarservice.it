import React, { useRef } from "react";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION} from "../../utils/constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomBackgroundContainer from "../../components/custom/CustomBackgroundContainer";

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
            <CustomBackgroundContainer image="/images/intro-servizi-image.jpeg">
                <CustomSectionContainer id="intro-servizi">

                    {/* Title */}
                    <CustomText
                        type="title"
                        text={INTRO_SERVIZI_TITLE}/>

                    {/* Subtitle */}
                    <CustomText
                        type="subtitle"
                        text={INTRO_SERVIZI_DESCRIPTION}/>

                </CustomSectionContainer>
            </CustomBackgroundContainer>
        </>

    );
}

export default IntroServizi;