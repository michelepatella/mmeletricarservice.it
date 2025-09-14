import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
	SERVICES_TITLE,
	ALL_SERVICES,
	HORIZONTAL_SCROLL_LABEL,
	SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
	SERVICES_TITLE_ANIMATION_THRESHOLD,
	SERVICES_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	SERVICES_CONTAINER_CLASS_NAME,
} from "../utils/const";
import { SERVICES_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import { useServiceTitleAnimation } from "../hooks/useServiceTitleAnimation";
import {
	handleSpanTitleStyle,
	handleTitleStyle,
} from "../logic/style-handling/servicesStyleHandler";
import { handleScrollLabelStyle } from "../logic/style-handling/usedCarsStyleHandler";
import BackgroundContainer from "../components/other/BackgroundContainer/BackgroundContainer";
import SectionContainer from "../components/other/SectionContainer/SectionContainer";
import InfoCard from "../components/other/InfoCard/InfoCard";
import CustomText from "../components/custom/CustomText/CustomText";

/**
 * This section represents Services section. The
 * section shows all the specialized services that the company
 * offers via informative cards (characterized by icon, title, and description).
 * @returns {Element}
 * @constructor
 */
function Services() {
	// To keep track when the service section
	// is in view to start title's animation
	const { ref, inView } = useInView({
		triggerOnce: SERVICES_TITLE_ANIMATION_TRIGGER_ONCE,
		threshold: SERVICES_TITLE_ANIMATION_THRESHOLD,
	});

	// To keep track of the words already displayed
	const [displayedWords, setDisplayedWords] = useState(
		SERVICES_TITLE.map(() => "")
	);

	// To animate title
	useServiceTitleAnimation(inView, setDisplayedWords);

	return (
		<BackgroundContainer
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
							SERVICES_TITLE.map(function (title, index) {
								return (
									'<span style="' +
									handleSpanTitleStyle(title) +
									'">' +
									displayedWords[index] +
									"</span>"
								);
							}).join("")
						}
						style={handleTitleStyle()}
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

				{/* Label indicating the user to scroll the
				 services horizontally in order to explore them */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.BODY}
					text={HORIZONTAL_SCROLL_LABEL}
					style={handleScrollLabelStyle(true)}
				/>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default Services;
