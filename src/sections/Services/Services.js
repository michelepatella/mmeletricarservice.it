import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
	ALL_SERVICES,
	SERVICES_BACKGROUND_IMAGE_LINK,
	SERVICES_CONTAINER_CLASS_NAME,
	SERVICES_TITLE,
	SERVICES_TITLE_ANIMATION_THRESHOLD,
	SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
} from "./const";
import {
	CUSTOM_TEXT_TYPES,
	SERVICES_SECTION_ID,
} from "../../utils/const";
import { useServiceTitleAnimation } from "./useServiceTitleAnimation";
import {
	getServicesTitleSpanStyle,
	getServicesTitleStyle,
} from "./styleHandler";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import InfoCard from "../../components/InfoCard/InfoCard";
import CustomText from "../../components/CustomText/CustomText";

/**
 * This section represents Services section. The
 * section shows all the specialized services that the company
 * offers via informative cards (characterized by icon, title, and description).
 * @returns {Element} — The services section.
 */
function Services() {
	// To keep track when the service section
	// is in view to start title's animation
	const { ref, inView } = useInView({
		triggerOnce: SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
		threshold: SERVICES_TITLE_ANIMATION_THRESHOLD,
	});

	// To keep track of the current index (word)
	const [activeIndex, setActiveIndex] = useState(0);

	// To keep track of the words already displayed
	const [displayedWords, setDisplayedWords] = useState(
		SERVICES_TITLE.map(() => "")
	);

	// To animate title
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
				{/* Services section title(s) */}
				<div ref={ref}>
					<CustomText
						type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
						text={
							// Show each word composing the section title
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

				{/* Global container for all the informative
				cards displayed for the services */}
				<div className={SERVICES_CONTAINER_CLASS_NAME}>
					{/* Show all the services via informative cards
					 which can be explored by scrolling the container
					 horizontally */}
					{ALL_SERVICES?.map((service) => (
						<div>
							{/* Each service shown through informative
							card having icon, title, and description */}
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
