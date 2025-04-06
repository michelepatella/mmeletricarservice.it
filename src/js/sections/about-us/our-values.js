import React, {useRef} from "react";
import {OUR_VALUES_SUBTITLE, OUR_VALUES_TITLE} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomBackgroundContainer from "../../components/custom/CustomBackgroundContainer";

/**
 * Our values section
 * @returns {Element}
 * @constructor
 */
function OurValues() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (

        <>
            <CustomBackgroundContainer
                image="/images/our-values-image.jpeg"
                custStyle={{marginBottom: 'var(--section_margin_bottom)'}}>

                <CustomSectionContainer id="our-values">

                    {/* Title */}
                    <CustomText
                        type="title"
                        text={OUR_VALUES_TITLE} />

                    {/* Subtitle */}
                    <CustomText
                        type="subtitle"
                        text={OUR_VALUES_SUBTITLE} />

                </CustomSectionContainer>

            </CustomBackgroundContainer>
        </>

    );
}

export default OurValues;