import React from "react";
import {
	ABOUT_US_BACKGROUND_IMAGE_LINK,
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "./const";
import {
	ABOUT_US_SECTION_ID,
	CUSTOM_TEXT_TYPES,
} from "../../utils/const";
import { getAboutUsSectionContainerStyle } from "./styleHandler";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BackgroundContainer from "../../components/BackgroundContainer/BackgroundContainer";
import CustomText from "../../components/CustomText/CustomText";

/**
 * This component represents the About us sections,
 * which aims at presenting the company.
 * @returns {Element}
 * @constructor
 */
function AboutUs() {
	return (
		<BackgroundContainer
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
		</BackgroundContainer>
	);
}

export default AboutUs;
