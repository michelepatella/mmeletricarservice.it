import React, { useRef } from "react";
import {
  ABOUT_US_DESCRIPTION,
  ABOUT_US_SUBTITLE,
  ABOUT_US_TITLE,
} from "../../utils/const";
import { useVideoAnimation } from "../../hooks/useVideoAnimation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SectionContainer from "../../components/sections/SectionContainer";
import CustomText from "../../components/custom/CustomText";
import SectionHeader from "../../components/sections/SectionHeader";

/**
 * About us section
 * @returns {Element}
 * @constructor
 */
function AboutUs() {
  //IntersectionObserver to generate the animation and
  //start the video when the section is visible
  const videoRef = useRef(null);
  const isVideoVisible = useIntersectionObserver(videoRef);
  useVideoAnimation(videoRef, isVideoVisible);

  return (
    <>
      <SectionContainer id="chi-siamo">
        {/* Section header */}
        <SectionHeader
          section="CHI SIAMO"
          title={ABOUT_US_TITLE}
          subtitle={ABOUT_US_SUBTITLE}
          children={
            <video
              className="video"
              ref={videoRef}
              src="/images/animation-logo.mp4"
              type="video/mp4"
              loop={false}
              controls={false}
              muted
              playsInline
            />
          }
        />

        {/* Description */}
        <CustomText type="body" text={ABOUT_US_DESCRIPTION} />
      </SectionContainer>
    </>
  );
}

export default AboutUs;
