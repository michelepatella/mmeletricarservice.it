import React, { useRef } from "react";
import {SERVICES_TITLE, SERVICES_SUBTITLE} from "../../utils/const";
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
            <BackgroundContainer image="/images/services-image.jpeg">
                <SectionContainer id="services">

                    {/* Section Header */}
                    <SectionHeader
                        section="SERVIZI"
                        title={SERVICES_TITLE}
                        subtitle={SERVICES_SUBTITLE} />

                </SectionContainer>
            </BackgroundContainer>
        </>

    );
}

export default Services;