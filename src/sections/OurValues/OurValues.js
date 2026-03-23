import React from "react";
import { Steps } from "antd";
import {
	OUR_VALUES_ALL_STEPS,
	OUR_VALUES_STEPS_CLASS_NAME,
	OUR_VALUES_STEPS_DIRECTION,
	OUR_VALUES_TITLE,
} from "./const.js";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	OUR_VALUES_SECTION_ID,
} from "../../utils/const.js";
import SectionBackground from "../../components/SectionBackground/SectionBackground.js";
import SectionContainer from "../../components/SectionContainer/SectionContainer.js";
import CustomText from "../../components/CustomText/CustomText.js";

/**
 * This component represents the 'Our values' section wich
 * which describes the values of the company.
 * @returns {Element} — 'Our values' section.
 */
function OurValues() {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer id={OUR_VALUES_SECTION_ID}>
				{/* Section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={OUR_VALUES_TITLE}
					disableAnimation
				/>

				{/* Company values presented through several steps */}
				<Steps
					className={OUR_VALUES_STEPS_CLASS_NAME}
					direction={OUR_VALUES_STEPS_DIRECTION}
					progressDot
					current={OUR_VALUES_ALL_STEPS.length}
					items={OUR_VALUES_ALL_STEPS?.map((step) => ({
						// Step title (i.e., company value's title)
						title: (
							<CustomText
								type={CUSTOM_TEXT_TYPES.HEADING}
								text={step.title}
							/>
						),

						// Step description (i.e., company value's description)
						description: (
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
								text={step.description}
							/>
						),
					}))}
				/>
			</SectionContainer>
		</SectionBackground>
	);
}

export default OurValues;
