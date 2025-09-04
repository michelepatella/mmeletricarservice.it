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
import SectionHeader from "../components/sections/SectionHeader/SectionHeader";

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
			<SectionHeader
				section="CHI SIAMO"
				title={ABOUT_US_TITLE}
				subtitle={ABOUT_US_SUBTITLE}
				children={
					<video
						className="video"
						ref={videoRef}
						src="/images/animation-logo.mp4"
						loop={false}
						controls={false}
						muted
						playsInline
					/>
				}
			/>

			{/* Presentation of the company */}
			<CustomText type="body" text={ABOUT_US_DESCRIPTION} />
		</SectionContainer>
	);
}

export default AboutUs;
