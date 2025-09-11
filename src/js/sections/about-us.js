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
			<h1
				style={{
					fontSize: "clamp(43px, 6vw, 120px)",
					color: "white",
					lineHeight: 1.2,
					marginBottom: 0,
				}}
				dangerouslySetInnerHTML={{
					__html: "⚡️ MM Eletricar Service.",
				}}
			/>

			{/* Section block */}
			<SectionBlock description={ABOUT_US_DESCRIPTION} />
		</SectionContainer>
	);
}

export default AboutUs;
