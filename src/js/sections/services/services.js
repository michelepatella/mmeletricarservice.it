import React, { useRef } from "react";
import {SERVICES_TITLE, SERVICES_DESCRIPTION} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomBackgroundContainer from "../../components/custom/CustomBackgroundContainer";

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
            <CustomBackgroundContainer
                image="/images/services-image.jpeg"
                style={{marginBottom: 0}}>

                <CustomSectionContainer id="services">

                    {/* Title */}
                    <CustomText
                        type="title"
                        text={SERVICES_TITLE} />

                    {/* Subtitle */}
                    <CustomText
                        type="subtitle"
                        text={SERVICES_DESCRIPTION} />

                </CustomSectionContainer>

            </CustomBackgroundContainer>
        </>

    );
}

export default Services;