import React from "react";
import {
    DOVE_SIAMO_INFO_CARDS,
    DOVE_SIAMO_TITLE,
    GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION
} from "../utils/constants";
import {handleGoogleMapsContainerStyle, handleGoogleMapsUnavailableDescriptionStyle} from "../logic/styleHandler";
import CustomSectionContainer from "../components/custom/CustomSectionContainer";
import CustomText from "../components/custom/CustomText";
import CustomInfoCard from "../components/custom/CustomInfoCard";
import '../../styles/sections/dove-siamo.css';

/**
 * "Dove siamo" section
 * @returns {Element}
 * @constructor
 */
function DoveSiamo(props) {
    return (

        <>
            <CustomSectionContainer id="dove-siamo">

                {/* Title */}
                <CustomText
                    type="title"
                    text={DOVE_SIAMO_TITLE}/>

                {/* Info Cards for each information */}
                {DOVE_SIAMO_INFO_CARDS.map((card, index) => (
                    <CustomInfoCard
                        key={index}
                        title={card.title}
                        description={card.description}/>
                ))}

                {/* Google Maps (shown only in case of cookie accepting) */}
                {props.cookiesAccepted ? (
                    <div className="google-maps-container">

                        <iframe
                            className="google-maps-iframe"
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>

                    </div>

                ) : (

                    <div
                        className="google-maps-container"
                        style={handleGoogleMapsContainerStyle()}>

                        <CustomText
                            type="small"
                            style={handleGoogleMapsUnavailableDescriptionStyle()}
                            text={GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION} />

                    </div>

                )}

            </CustomSectionContainer>
        </>

    );
}

export default DoveSiamo;