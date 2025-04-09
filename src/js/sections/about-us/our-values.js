import React, {useRef} from "react";
import {
    OUR_VALUES_DESCRIPTION,
    OUR_VALUES_SUBTITLE,
    OUR_VALUES_TITLE,
} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomSectionHeader from "../../components/custom/CustomSectionHeader";

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

                <CustomSectionContainer id="our-values">

                    {/* Section header */}
                    <CustomSectionHeader
                        section="I NOSTRI VALORI"
                        title={OUR_VALUES_TITLE}
                        subtitle={OUR_VALUES_SUBTITLE} />

                    {/* Subtitle */}
                    <CustomText
                        type="subtitle"
                        text={OUR_VALUES_DESCRIPTION} />

                </CustomSectionContainer>

        </>

    );
}

export default OurValues;