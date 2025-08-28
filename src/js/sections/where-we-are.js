import {
	WHERE_WE_ARE_INFO,
	WHERE_WE_ARE_DESCRIPTION,
	WHERE_WE_ARE_TITLE,
	GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
	WHERE_WE_ARE_SUBTITLE,
	GOOGLE_MAPS_LINK,
} from "../utils/const";
import {
	handleGoogleMapsContainerStyle,
	handleGoogleMapsUnavailableDescriptionStyle,
} from "../logic/style-handling/whereWeAreStyleHandler";
import SectionContainer from "../components/sections/SectionContainer";
import CustomText from "../components/custom/CustomText";
import InfoCard from "../components/other/InfoCard";
import SectionHeader from "../components/sections/SectionHeader";

/**
 * This component represents the Where we are section.
 * It contains information about where the company is located, along with
 * a Google Maps frame. Additionally, show infomation about working hours.
 * @returns {Element}
 * @constructor
 */
function WhereWeAre(props) {
	return (
		<>
			<SectionContainer id="dove-siamo">
				{/* Section header */}
				<SectionHeader
					section="DOVE SIAMO"
					title={WHERE_WE_ARE_TITLE}
					subtitle={WHERE_WE_ARE_SUBTITLE}
				/>

				{/* Description */}
				<CustomText
					type="body"
					text={WHERE_WE_ARE_DESCRIPTION}
				/>

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

				{/* Info Cards for each information
        (where the company is located and working hours) */}
				{WHERE_WE_ARE_INFO?.map((card) => (
					<InfoCard
						key={card.title}
						title={card?.title}
						description={card?.description}
					/>
				))}
			</SectionContainer>
		</>
	);
}

export default WhereWeAre;
