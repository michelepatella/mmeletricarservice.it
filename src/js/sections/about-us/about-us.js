import React, { useRef } from "react";
import { ABOUT_US_SUBTITLE } from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useVideoAnimation } from "../../hooks/useVideoAnimation";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import '../../../styles/sections/about-us.css';

/**
 * About us section
 * @returns {Element}
 * @constructor
 */
function AboutUs() {

    //IntersectionObserver to generate the animation and
    //start the video when the section is visible
    const videoRef = useRef(null);
    const isVideoVisible= useIntersectionObserver(videoRef);
    useVideoAnimation(videoRef, isVideoVisible);

    return (

            <CustomSectionContainer id="about-us">

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
                    text={ABOUT_US_SUBTITLE} />

            </CustomSectionContainer>

    );
}

export default AboutUs;