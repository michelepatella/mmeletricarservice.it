import React from "react";
import {
	ABOUT_US_BACKGROUND_IMAGE_LINK,
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "./const.js";
import {
	ABOUT_US_SECTION_ID,
	CUSTOM_TEXT_TYPES,
} from "../../utils/const.js";
import { getAboutUsSectionContainerStyle } from "./styleHandler.js";
import SectionContainer from "../../components/SectionContainer/SectionContainer.js";
import SectionBackground from "../../components/SectionBackground/SectionBackground.js";
import CustomText from "../../components/CustomText/CustomText.js";

/**
 * This component represents the About us sections,
 * which aims at presenting the company.
 * @returns {Element} — About us section.
 */
function AboutUs() {
	return (
		<SectionBackground
			image={ABOUT_US_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer
				id={ABOUT_US_SECTION_ID}
				custStyle={getAboutUsSectionContainerStyle()}
			>
				{/* About us section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={ABOUT_US_TITLE}
					disableAnimation
				/>

				{/* About us section description */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.BODY}
					text={ABOUT_US_DESCRIPTION}
				/>
			</SectionContainer>
		</SectionBackground>
	);
}

export default AboutUs;
