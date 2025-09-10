import React, { useRef } from "react";
import {
	ABOUT_US_DESCRIPTION,
	ABOUT_US_SUBTITLE,
	ABOUT_US_TITLE,
} from "../utils/const";
import { useVideoAnimation } from "../hooks/useVideoAnimation";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import CustomText from "../components/custom/CustomText/CustomText";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";

/**
 * This component represents the About us sections,
 * which aims at presenting the company.
 * @returns {Element}
 * @constructor
 */
function AboutUs() {
	// Create a reference for the video inserted into
	// the section header, which shows a logo animation
	// to be started when the section becomes visible
	const videoRef = useRef(null);
	const isVideoVisible = useIntersectionObserver(videoRef);
	useVideoAnimation(videoRef, isVideoVisible);

	return (
		<SectionContainer id="chi-siamo">
			{/* Section header (title, subtitle, and video animation) */}
			<SectionBlock
				title={ABOUT_US_TITLE}
				description={ABOUT_US_DESCRIPTION}
			/>
		</SectionContainer>
	);
}

export default AboutUs;
