import React, { useRef } from "react";
import {SERVICES_TITLE, SERVICES_SUBTITLE} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomBackgroundContainer from "../../components/custom/CustomBackgroundContainer";
import CustomSectionHeader from "../../components/custom/CustomSectionHeader";

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
            <CustomBackgroundContainer image="/images/services-image.jpeg">
                <CustomSectionContainer id="services">

                    <CustomSectionHeader
                        section="SERVIZI"
                        title={SERVICES_TITLE}
                        subtitle={SERVICES_SUBTITLE} />

                </CustomSectionContainer>
            </CustomBackgroundContainer>
        </>

    );
}

export default Services;