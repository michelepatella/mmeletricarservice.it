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
