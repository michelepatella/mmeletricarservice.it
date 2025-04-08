import React from "react";
import {ABOUT_US_DESCRIPTION, ABOUT_US_SUBTITLE, ABOUT_US_TITLE} from "../../utils/const";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomSectionHeader from "../../components/custom/CustomSectionHeader";
import '../../../styles/sections/about-us.css';

/**
 * About us section
 * @returns {Element}
 * @constructor
 */
function AboutUs() {

    return (

            <CustomSectionContainer id="about-us">

                {/* Section header */}
                <CustomSectionHeader
                    section="CHI SIAMO"
                    title={ABOUT_US_TITLE}
                    subtitle={ABOUT_US_SUBTITLE}
                    video="/images/animation-logo.mp4"/>

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={ABOUT_US_DESCRIPTION} />

            </CustomSectionContainer>

    );
}

export default AboutUs;