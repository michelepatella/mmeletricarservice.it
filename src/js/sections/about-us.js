import React from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
	CONTACTS_TITLE,
} from "../utils/const";
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
		<BackgroundContainer image="/images/about-us-background.avif">
			<SectionContainer id="chi-siamo">
				{/* About us section title */}
				<CustomText
					type="super-heading"
					text={ABOUT_US_TITLE}
					disableAnimation={true}
				/>

				<CustomText
					type="body"
					text={ABOUT_US_DESCRIPTION}
				/>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default AboutUs;
