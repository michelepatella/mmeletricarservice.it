import React, { useRef } from "react";
import {
  OUR_VALUES_DESCRIPTION,
  OUR_VALUES_SUBTITLE,
  OUR_VALUES_TITLE,
} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SectionContainer from "../../components/sections/SectionContainer";
import CustomText from "../../components/custom/CustomText";
import SectionHeader from "../../components/sections/SectionHeader";
import { Helmet } from "react-helmet";

/**
 * Our values section
 * @returns {Element}
 * @constructor
 */
function OurValues() {
  //IntersectionObserver to generate the animation when the section is visible
  const imageRef = useRef(null);
  useIntersectionObserver(imageRef);

  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>MM Eletricar Service - I nostri valori</title>
        <meta
          name="description"
          content="MM Eletricar Service si impegna a costruire relazioni di fiducia con i clienti, fornendo soluzioni di qualità, affidabili e su misura."
        />
      </Helmet>

      <SectionContainer id="i-nostri-valori">
        {/* Section header */}
        <SectionHeader
          section="I NOSTRI VALORI"
          title={OUR_VALUES_TITLE}
          subtitle={OUR_VALUES_SUBTITLE}
        />

        {/* Description */}
        <CustomText type="body" text={OUR_VALUES_DESCRIPTION} />
      </SectionContainer>
    </>
  );
}

export default OurValues;
