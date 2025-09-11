import React from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

/**
 * This component represents the About us sections,
 * which aims at presenting the company.
 * @returns {Element}
 * @constructor
 */
function AboutUs() {
	return (
		<SectionContainer id="chi-siamo">
			{/* Section block */}
			<SectionBlock
				title={ABOUT_US_TITLE}
				description={ABOUT_US_DESCRIPTION}
			/>
		</SectionContainer>
	);
}

export default AboutUs;
