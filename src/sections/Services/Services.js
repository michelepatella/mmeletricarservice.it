import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
	ALL_SERVICES,
	SERVICES_BACKGROUND_IMAGE_LINK,
	SERVICES_CONTAINER_CLASS_NAME,
	SERVICES_TITLE,
	SERVICES_TITLE_ANIMATION_THRESHOLD,
	SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
} from "./const.js";
import {
	CUSTOM_TEXT_TYPES,
	SERVICES_SECTION_ID,
} from "../../utils/const.js";
import { useServiceTitleAnimation } from "./use-service-title-animation.js";
import {
	getServicesTitleSpanStyle,
	getServicesTitleStyle,
} from "./style-handler.js";
import SectionBackground from "../../components/SectionBackground/SectionBackground.js";
import SectionContainer from "../../components/SectionContainer/SectionContainer.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import CustomText from "../../components/CustomText/CustomText.js";

/**
 * This component represents the 'Services' section which 
 * shows all the specialized services offered by the company.
 * @returns {Element} — The 'Services' section.
 */
function Services() {
	// To keep track when the 'Services' section
	// is in view to trigger the title's animation
	const { ref, inView } = useInView({
		triggerOnce: SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
		threshold: SERVICES_TITLE_ANIMATION_THRESHOLD,
	});

	// To keep track of the title's word just displayed
	// by the animation
	const [activeIndex, setActiveIndex] = useState(0);

	// To keep track of the title words already displayed
	// by the animation
	const [displayedWords, setDisplayedWords] = useState(
		SERVICES_TITLE.map(() => "")
	);

	// To animate the title
	useServiceTitleAnimation(
		inView,
		setDisplayedWords,
		setActiveIndex
	);

	return (
		<SectionBackground
			image={SERVICES_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer id={SERVICES_SECTION_ID}>
				{/* Section titles */}
				<div ref={ref}>
					<CustomText
						type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
						text={
							// Show each word composing the title
							// by using an individual span
							SERVICES_TITLE.map((title, index) => {
								const isActive = index === activeIndex;
								const style =
									getServicesTitleSpanStyle(title);
								const word = displayedWords[index] || "";
								return (
									'<span style="' +
									style +
									'">' +
									word +
									(isActive ? "|" : "") +
									"</span>"
								);
							}).join("")
						}
						style={getServicesTitleStyle(
							SERVICES_TITLE.length
						)}
					/>
				</div>

				{/* Container for all the informative cards */}
				<div className={SERVICES_CONTAINER_CLASS_NAME}>
					{/* Show an informative card for each service */}
					{ALL_SERVICES?.map((service) => (
						<div>
							{/* Informative card with icon, title, and 
							 description */}
							<InfoCard
								title={service?.title}
								description={service?.description}
								icon={service?.icon}
							/>
						</div>
					))}
				</div>
			</SectionContainer>
		</SectionBackground>
	);
}

export default Services;
