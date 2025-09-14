import React from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_SECTION_ID,
	ABOUT_US_TITLE,
	CUSTOM_TEXT_TYPES,
} from "../utils/const";
import { ABOUT_US_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import SectionContainer from "../components/other/SectionContainer/SectionContainer";
import BackgroundContainer from "../components/other/BackgroundContainer/BackgroundContainer";
import CustomText from "../components/custom/CustomText/CustomText";

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
				custStyle={{ height: "var(--about_us_height)" }}
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
