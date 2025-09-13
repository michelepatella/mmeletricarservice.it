import React from "react";
import {
	WHERE_WE_ARE_TITLE,
	SITE,
	WORKING_HOURS_TITLE,
	WORKING_HOURS_DESCRIPTION,
	GOOGLE_MAPS_LINK,
	GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
} from "../utils/const";
import { DOTTED_BACKGROUND_IMAGE_LINK } from "../utils/internal_links";
import {
	handleGoogleMapsContainerStyle,
	handleGoogleMapsUnavailableDescriptionStyle,
} from "../logic/style-handling/whereWeAreStyleHandler";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";
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
			<SectionContainer id="dove-siamo">
				{/* Where we are section title */}
				<CustomText
					type="super-heading"
					text={WHERE_WE_ARE_TITLE}
					disableAnimation={true}
				/>

				{/* Location of the company highlighted by a
				block quote */}
				<CustomBlockQuote>
					<CustomText type="body" text={SITE} />
				</CustomBlockQuote>

				{/* Working hours of the company title */}
				<CustomText
					type="heading"
					text={WORKING_HOURS_TITLE}
				/>

				{/* Working hours of the company highlighted by a
				block quote */}
				<CustomBlockQuote>
					<CustomText
						type="body"
						text={WORKING_HOURS_DESCRIPTION}
					/>
				</CustomBlockQuote>

				{/* Google Maps (shown only in case of cookie accepting) */}
				{props.cookiesAccepted ? (
					<div className="google-maps-container">
						<iframe
							src={GOOGLE_MAPS_LINK}
							className="google-maps-iframe"
							title="google-maps"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				) : (
					// In case cookies have not been accepted,
					// Google Maps frame cannot be shown
					<div
						className="google-maps-container"
						style={handleGoogleMapsContainerStyle()}
					>
						{/* Google Maps unavailable description */}
						<CustomText
							type="caption"
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
