import React from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "../utils/const";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";
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
		<BackgroundContainer
			custStyle={{
				backgroundSize: "auto",
				backgroundRepeat: "repeat",
				backgroundOrigin: "center center",
			}}
			image="/images/about-us-image.avif"
		>
			<SectionContainer id="chi-siamo">
				<h1
					style={{
						fontSize: "clamp(43px, 6vw, 120px)",
						color: "white",
						lineHeight: 1.2,
						marginBottom: "20px",
					}}
					dangerouslySetInnerHTML={{
						__html: "Chi siamo.",
					}}
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
