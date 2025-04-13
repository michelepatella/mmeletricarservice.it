import {
    ABOUT_US_DESCRIPTION,
    ABOUT_US_SUBTITLE,
    ABOUT_US_TITLE
} from "../../utils/const";
import SectionContainer from "../../components/sections/SectionContainer";
import CustomText from "../../components/custom/CustomText";
import SectionHeader from "../../components/sections/SectionHeader";

/**
 * About us section
 * @returns {Element}
 * @constructor
 */
function AboutUs() {

    return (

            <SectionContainer id="chi-siamo">

                {/* Section header */}
                <SectionHeader
                    section="CHI SIAMO"
                    title={ABOUT_US_TITLE}
                    subtitle={ABOUT_US_SUBTITLE}
                    video="/images/animation-logo.mp4" />

                {/* Subtitle */}
                <CustomText
                    type="subheading"
                    text={ABOUT_US_DESCRIPTION} />

            </SectionContainer>

    );
}

export default AboutUs;