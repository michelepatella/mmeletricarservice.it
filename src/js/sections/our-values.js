import React from "react";
import {
	OUR_VALUES_DESCRIPTION,
	OUR_VALUES_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";

/**
 * This component represents Our values section,
 * which aims to describe objectives, mission, and values of the company.
 * @returns {Element}
 * @constructor
 */
function OurValues() {
	return (
		<SectionContainer id="i-nostri-valori">
			{/* Section block */}
			<SectionBlock
				section="I NOSTRI VALORI"
				title={OUR_VALUES_TITLE}
				description={OUR_VALUES_DESCRIPTION}
			/>
		</SectionContainer>
	);
}

export default OurValues;
