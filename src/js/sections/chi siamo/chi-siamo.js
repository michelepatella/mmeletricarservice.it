import React, { useRef } from "react";
import { CHI_SIAMO_SUBTITLE } from "../../utils/constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useVideoAnimation } from "../../hooks/useVideoAnimation";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import '../../../styles/sections/chi-siamo.css';

/**
 * "Chi siamo" section
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    //IntersectionObserver to generate the animation and
    //start the video when the section is visible
    const videoRef = useRef(null);
    const isVideoVisible= useIntersectionObserver(videoRef);
    useVideoAnimation(videoRef, isVideoVisible);

    return (

            <CustomSectionContainer id="chi-siamo">

                {/* Logo animation video */}
                <video
                    className="video-animation"
                    ref={videoRef}
                    src="/images/animation-logo.mp4"
                    type="video/mp4"
                    loop={false}
                    controls={false}
                    muted
                    playsInline />

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={CHI_SIAMO_SUBTITLE} />

            </CustomSectionContainer>

    );
}

export default ChiSiamo;