import React, { useRef } from "react";
import { SERVICES_TITLE, SERVICES_SUBTITLE } from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SectionContainer from "../../components/sections/SectionContainer";
import BackgroundContainer from "../../components/sections/BackgroundContainer";
import SectionHeader from "../../components/sections/SectionHeader";
import { Helmet } from "react-helmet";

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
        <title>MM Eletricar Service - Servizi</title>
        <meta
          name="description"
          content="Riparazioni, manutenzioni, diagnosi elettroniche e vendita di auto usate a Gravina in Puglia (BA)."
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
