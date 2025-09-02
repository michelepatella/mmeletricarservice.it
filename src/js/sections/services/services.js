import React from "react";
import {
	SERVICES_TITLE,
	SERVICES_SUBTITLE,
} from "../../utils/const";
import SectionContainer from "../../components/sections/SectionContainer/SectionContainer";
import BackgroundContainer from "../../components/sections/BackgroundContainer/BackgroundContainer";
import SectionHeader from "../../components/sections/SectionHeader/SectionHeader";

/**
 * This component represents the Service section.
 * This section is just an introduction to the services offered by the
 * company and the used cars available.
 * @returns {Element}
 * @constructor
 */
function Services() {
	return (
		<>
			{/* Background container to contain the whole section and
       use a customized background */}
			<BackgroundContainer image="/images/services-image.avif">
				<SectionContainer id="servizi">
					{/* Section Header */}
					<SectionHeader
						section="SERVIZI"
						title={SERVICES_TITLE}
						subtitle={SERVICES_SUBTITLE}
					/>
				</SectionContainer>
			</BackgroundContainer>
		</>
	);
}

export default Services;
