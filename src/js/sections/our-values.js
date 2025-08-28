import React from "react";
import {
	OUR_VALUES_DESCRIPTION,
	OUR_VALUES_SUBTITLE,
	OUR_VALUES_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer";
import CustomText from "../components/custom/CustomText";
import SectionHeader from "../components/sections/SectionHeader";

/**
 * This component represents Our values section,
 * which aims to describe objectives, mission, and values of the company.
 * @returns {Element}
 * @constructor
 */
function OurValues() {
	return (
		<>
			<SectionContainer id="i-nostri-valori">
				{/* Section header */}
				<SectionHeader
					section="I NOSTRI VALORI"
					title={OUR_VALUES_TITLE}
					subtitle={OUR_VALUES_SUBTITLE}
				/>

				{/* Description of the company
        objectives, mission, and values  */}
				<CustomText
					type="body"
					text={OUR_VALUES_DESCRIPTION}
				/>
			</SectionContainer>
		</>
	);
}

export default OurValues;
