import React from "react";
import { Steps } from "antd";
import {
	OUR_VALUES_ALL_STEPS,
	OUR_VALUES_STEPS_CLASS_NAME,
	OUR_VALUES_STEPS_DIRECTION,
	OUR_VALUES_TITLE,
} from "./const";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	OUR_VALUES_SECTION_ID,
} from "../../utils/const";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import CustomText from "../../components/CustomText/CustomText";

/**
 * This component represents Our values section,
 * which aims to describe values of the company.
 * @returns {Element} — Our values section.
 */
function OurValues() {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer id={OUR_VALUES_SECTION_ID}>
				{/* Our values section title */}
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
						// Title of current step
						// (that's a company value's title)
						title: (
							<CustomText
								type={CUSTOM_TEXT_TYPES.HEADING}
								text={step.title}
							/>
						),

						// Description of current step
						// (that's a company value's description)
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
