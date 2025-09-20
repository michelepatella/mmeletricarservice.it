import React from "react";
import {
	WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME,
	WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_CLASS_NAME,
	WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_TITLE,
	WHERE_WE_ARE_GOOGLE_MAPS_LINK,
	WHERE_WE_ARE_GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
	WHERE_WE_ARE_TITLE,
	WHERE_WE_ARE_WORKING_HOURS_DESCRIPTION,
	WHERE_WE_ARE_WORKING_HOURS_TITLE,
} from "./const";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	SITE,
	WHERE_WE_ARE_SECTION_ID,
} from "../../utils/const";
import {
	getGoogleMapsContainerStyle,
	getGoogleMapsUnavailableDescriptionStyle,
} from "./styleHandler";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import CustomText from "../../components/CustomText/CustomText";
import BlockQuote from "../../components/BlockQuote/BlockQuote";

/**
 * This component represents the Where we are section.
 * It contains information about where the company is located,
 * along with a Google Maps frame. Additionally, show information
 * about working hours.
 * @param props — Object containing:
 *   - cookiesAccepted: boolean | null — Indicates if the user
 *   has accepted cookies. If true, Google Maps iframe is
 *   displayed; otherwise, a placeholder description is shown.
 * @returns {Element} — The where we are section.
 */
function WhereWeAre(props) {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer id={WHERE_WE_ARE_SECTION_ID}>
				{/* Where we are section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={WHERE_WE_ARE_TITLE}
					disableAnimation
				/>

				{/* Location of the company highlighted by a
				block quote */}
				<BlockQuote>
					<CustomText
						type={CUSTOM_TEXT_TYPES.BODY}
						text={SITE}
					/>
				</BlockQuote>

				{/* Working hours of the company title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.HEADING}
					text={WHERE_WE_ARE_WORKING_HOURS_TITLE}
					disableAnimation
				/>

				{/* Working hours of the company highlighted by a
				block quote */}
				<BlockQuote>
					<CustomText
						type={CUSTOM_TEXT_TYPES.BODY}
						text={WHERE_WE_ARE_WORKING_HOURS_DESCRIPTION}
					/>
				</BlockQuote>

				{/* Google Maps (shown only in case of cookie accepting) */}
				{props.cookiesAccepted ? (
					<div
						className={
							WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME
						}
					>
						<iframe
							src={WHERE_WE_ARE_GOOGLE_MAPS_LINK}
							className={
								WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_CLASS_NAME
							}
							title={WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_TITLE}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				) : (
					// In case cookies have not been accepted,
					// Google Maps frame cannot be shown
					<div
						className={
							WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME
						}
						style={getGoogleMapsContainerStyle()}
					>
						{/* Google Maps unavailable description */}
						<CustomText
							type={CUSTOM_TEXT_TYPES.CAPTION}
							text={
								WHERE_WE_ARE_GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION
							}
							style={getGoogleMapsUnavailableDescriptionStyle()}
						/>
					</div>
				)}
			</SectionContainer>
		</SectionBackground>
	);
}

export default WhereWeAre;
