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
import React from "react";
import SectionBlock from "../components/sections/SectionBlock/SectionBlock";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

/**
 * This component represents the Where we are section.
 * It contains information about where the company is located, along with
 * a Google Maps frame. Additionally, show information about working hours.
 * @returns {Element}
 * @constructor
 */
function WhereWeAre(props) {
	return (
		<BackgroundContainer
			image="/images/dotted-background-image.avif"
			custStyle={{
				height: "100%",
				backgroundSize: "auto !important",
				backgroundRepeat: "repeat !important",
				backgroundOrigin: "right !important",
			}}
		>
			<SectionContainer id="dove-siamo">
				{/* Where we are section title */}
				<h1
					style={{
						fontSize: "clamp(43px, 6vw, 120px)",
						color: "white",
						lineHeight: 1.2,
						marginBottom: "20px",
					}}
					dangerouslySetInnerHTML={{
						__html: "Dove siamo.",
					}}
				/>

				<blockquote
					style={{
						display: "inline-block",
						borderLeft: "3px solid",
						color: "var(--yellow_color)",
						paddingLeft: "1rem",
						marginLeft: "5px",
					}}
				>
					<CustomText
						type="body"
						text={WHERE_WE_ARE_DESCRIPTION}
					/>
				</blockquote>

				<br />

				<h1
					style={{
						fontSize: "clamp(30px, 3vw, 120px)",
						color: "white",
						lineHeight: 1.2,
						marginBottom: "20px",
					}}
					dangerouslySetInnerHTML={{
						__html: "Orari d'apertura.",
					}}
				/>

				<blockquote
					style={{
						display: "inline-block",
						borderLeft: "3px solid",
						color: "var(--yellow_color)",
						paddingLeft: "1rem",
						marginLeft: "5px",
					}}
				>
					<CustomText
						type="body"
						text={
							"- <strong>Lun-Ven</strong>: 08:30-13:00 / 15:00-19:00 <br>" +
							"- <strong>Sab</strong>: 08:30-13:00"
						}
					/>
				</blockquote>

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
