import React from "react";
import { Steps } from "antd";
import {
	OUR_VALUES_TITLE,
	OUR_VALUES_STEPS,
} from "../utils/const";
import { DOTTED_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import CustomText from "../components/custom/CustomText/CustomText";

/**
 * This component represents Our values section,
 * which aims to describe values of the company.
 * @returns {Element}
 * @constructor
 */
function OurValues() {
	return (
		<BackgroundContainer
			image={DOTTED_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer id="i-nostri-valori">
				{/* Our values section title */}
				<CustomText
					type="super-heading"
					text={OUR_VALUES_TITLE}
					disableAnimation={true}
				/>

				{/* Company values presented through several steps */}
				<Steps
					className="our-values-steps"
					direction="vertical"
					progressDot
					current={OUR_VALUES_STEPS.length}
					items={OUR_VALUES_STEPS?.map((step) => ({
						// Title of current step
						// (that's a company value's title)
						title: (
							<CustomText
								type="heading"
								text={step.title}
							/>
						),

						// Description of current step
						// (that's a company value's description)
						description: (
							<CustomText
								type="body"
								text={step.description}
							/>
						),
					}))}
				/>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default OurValues;
