import React from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "../utils/const";
import { ABOUT_US_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";
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
			<SectionContainer id="chi-siamo">
				{/* About us section title */}
				<CustomText
					type="super-heading"
					text={ABOUT_US_TITLE}
					disableAnimation={true}
				/>

				{/* About us section description */}
				<CustomText
					type="body"
					text={ABOUT_US_DESCRIPTION}
				/>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default AboutUs;
