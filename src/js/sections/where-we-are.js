import {
	WHERE_WE_ARE_INFO,
	WHERE_WE_ARE_DESCRIPTION,
	WHERE_WE_ARE_TITLE,
	GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
	GOOGLE_MAPS_LINK,
} from "../utils/const";
import {
	handleGoogleMapsContainerStyle,
	handleGoogleMapsUnavailableDescriptionStyle,
} from "../logic/style-handling/whereWeAreStyleHandler";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import CustomText from "../components/custom/CustomText/CustomText";
import InfoCard from "../components/other/InfoCard/InfoCard";

/**
 * This component represents the Where we are section.
 * It contains information about where the company is located, along with
 * a Google Maps frame. Additionally, show information about working hours.
 * @returns {Element}
 * @constructor
 */
function WhereWeAre(props) {
	return (
		<SectionContainer id="dove-siamo">
			{/* Where we are section title */}
			<h1
				style={{
					fontSize: "clamp(43px, 6vw, 120px)",
					background: "var(--yellow_gradient_color)",
					WebkitBackgroundClip: "text",
					color: "transparent",
					lineHeight: 1.2,
				}}
				dangerouslySetInnerHTML={{ __html: "Il punto d'incontro con la qualità." }}
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
	);
}

export default WhereWeAre;
