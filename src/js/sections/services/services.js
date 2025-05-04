import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import {
    SERVICES_TITLE,
    SERVICES_SUBTITLE,
    HELMET_SERVICES_TITLE,
    HELMET_SERVICES_DESCRIPTION
} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SectionContainer from "../../components/sections/SectionContainer";
import BackgroundContainer from "../../components/sections/BackgroundContainer";
import SectionHeader from "../../components/sections/SectionHeader";

/**
 * Services section
 * @returns {Element}
 * @constructor
 */
function Services() {
  //IntersectionObserver to generate the animation when the section is visible
  const imageRef = useRef(null);
  useIntersectionObserver(imageRef);

  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>{HELMET_SERVICES_TITLE}</title>
        <meta
          name="description"
          content={HELMET_SERVICES_DESCRIPTION}
        />
      </Helmet>

      <BackgroundContainer image="/images/services-image.avif">
        <SectionContainer id="servizi">
          {/* Section Header */}
          <SectionHeader
            section="SERVIZI"
            title={SERVICES_TITLE}
            subtitle={SERVICES_SUBTITLE}
          />
        </SectionContainer>
      </BackgroundContainer>
    </>
  );
}

export default Services;
