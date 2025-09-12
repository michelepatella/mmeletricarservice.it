import React from "react";
import {
	ABOUT_US_TITLE,
	OUR_VALUES_DESCRIPTION,
	OUR_VALUES_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import CustomText from "../components/custom/CustomText/CustomText";
import { Steps } from "antd";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

/**
 * This component represents Our values section,
 * which aims to describe objectives, mission, and values of the company.
 * @returns {Element}
 * @constructor
 */
function OurValues() {
	return (
		<BackgroundContainer image="/images/dotted-background.avif">
			<SectionContainer id="i-nostri-valori">
				{/* Our values section title */}
				<CustomText
					type="super-heading"
					text={OUR_VALUES_TITLE}
					disableAnimation={true}
				/>

				<Steps
					className="our-values-steps"
					direction="vertical"
					progressDot
					current={3}
					items={[
						{
							title: (
								<CustomText
									type="heading"
									text="Cura dell'auto"
								/>
							),
							description: (
								<CustomText
									type="body"
									text="Perchè sappiamo quanto sia importante per i nostri clienti."
								/>
							),
						},
						{
							title: (
								<CustomText type="heading" text="Impegno" />
							),
							description: (
								<CustomText
									type="body"
									text="Per soddisfare ogni esigenza e superare le aspettative."
								/>
							),
						},
						{
							title: (
								<CustomText type="heading" text="Fiducia" />
							),
							description: (
								<CustomText
									type="body"
									text="Agiamo con trasparenza e serietà, costruendo relazioni solide."
								/>
							),
						},
					]}
				/>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default OurValues;
