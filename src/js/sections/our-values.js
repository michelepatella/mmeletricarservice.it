import React from "react";
import {
	OUR_VALUES_DESCRIPTION,
	OUR_VALUES_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

/**
 * This component represents Our values section,
 * which aims to describe objectives, mission, and values of the company.
 * @returns {Element}
 * @constructor
 */
function OurValues() {
	return (
		<SectionContainer id="i-nostri-valori">
			<h1
				style={{
					fontSize: "clamp(43px, 6vw, 120px)",
					color: "white",
					lineHeight: 1.2,
					marginBottom: 0,
				}}
				dangerouslySetInnerHTML={{
					__html: "🌱 Ciò in cui crediamo.",
				}}
			/>

			{/* Section block */}
			<SectionBlock description={OUR_VALUES_DESCRIPTION} />
		</SectionContainer>
	);
}

export default OurValues;
