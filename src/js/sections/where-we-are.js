import React from "react";
import {
	WHERE_WE_ARE_TITLE,
	SITE,
	WORKING_HOURS_TITLE,
	WORKING_HOURS_DESCRIPTION,
	GOOGLE_MAPS_LINK,
	GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
	WHERE_WE_ARE_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	GOOGLE_MAPS_CONTAINER_CLASS_NAME,
	GOOGLE_MAPS_IFRAME_CLASS_NAME,
	GOOGLE_MAPS_IFRAME_TITLE,
} from "../utils/const";
import { DOTTED_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import {
	handleGoogleMapsContainerStyle,
	handleGoogleMapsUnavailableDescriptionStyle,
} from "../logic/style-handling/whereWeAreStyleHandler";
import SectionContainer from "../components/other/SectionContainer/SectionContainer";
import BackgroundContainer from "../components/other/BackgroundContainer/BackgroundContainer";
import CustomText from "../components/custom/CustomText/CustomText";
import CustomBlockQuote from "../components/custom/CustomBlockQuote";

/**
 * This component represents the Where we are section.
 * It contains information about where the company is located,
 * along with a Google Maps frame. Additionally, show information
 * about working hours.
 * @returns {Element}
 * @constructor
 */
function WhereWeAre(props) {
	return (
		<BackgroundContainer
			image={DOTTED_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer id={WHERE_WE_ARE_SECTION_ID}>
				{/* Where we are section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={WHERE_WE_ARE_TITLE}
					disableAnimation
				/>

				{/* Location of the company highlighted by a
				block quote */}
				<CustomBlockQuote>
					<CustomText
						type={CUSTOM_TEXT_TYPES.BODY}
						text={SITE}
					/>
				</CustomBlockQuote>

				{/* Working hours of the company title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.HEADING}
					text={WORKING_HOURS_TITLE}
					disableAnimation
				/>

				{/* Working hours of the company highlighted by a
				block quote */}
				<CustomBlockQuote>
					<CustomText
						type={CUSTOM_TEXT_TYPES.BODY}
						text={WORKING_HOURS_DESCRIPTION}
					/>
				</CustomBlockQuote>

				{/* Google Maps (shown only in case of cookie accepting) */}
				{props.cookiesAccepted ? (
					<div className={GOOGLE_MAPS_CONTAINER_CLASS_NAME}>
						<iframe
							src={GOOGLE_MAPS_LINK}
							className={GOOGLE_MAPS_IFRAME_CLASS_NAME}
							title={GOOGLE_MAPS_IFRAME_TITLE}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				) : (
					// In case cookies have not been accepted,
					// Google Maps frame cannot be shown
					<div
						className={GOOGLE_MAPS_CONTAINER_CLASS_NAME}
						style={handleGoogleMapsContainerStyle()}
					>
						{/* Google Maps unavailable description */}
						<CustomText
							type={CUSTOM_TEXT_TYPES.CAPTION}
							text={GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION}
							style={handleGoogleMapsUnavailableDescriptionStyle()}
						/>
					</div>
				)}
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default WhereWeAre;
