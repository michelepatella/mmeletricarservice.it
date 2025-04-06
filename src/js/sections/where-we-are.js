import React from "react";
import {
    WHERE_WE_ARE_INFO_CARD,
    WHERE_WE_ARE_SUBTITLE,
    WHERE_WE_ARE_TITLE,
    GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION
} from "../utils/const";
import {handleGoogleMapsContainerStyle, handleGoogleMapsUnavailableDescriptionStyle} from "../logic/styleHandler";
import CustomSectionContainer from "../components/custom/CustomSectionContainer";
import CustomText from "../components/custom/CustomText";
import CustomInfoCard from "../components/custom/CustomInfoCard";
import '../../styles/sections/where-we-are.css';

/**
 * Where We Are section
 * @returns {Element}
 * @constructor
 */
function WhereWeAre(props) {
    return (

        <>
            <CustomSectionContainer id="where-we-are">

                {/* Title */}
                <CustomText
                    type="title"
                    text={WHERE_WE_ARE_TITLE} />

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={WHERE_WE_ARE_SUBTITLE} />

                {/* Google Maps (shown only in case of cookie accepting) */}
                {props.cookiesAccepted ? (
                    <div className="google-maps-container">

                        <iframe
                            className="google-maps-iframe"
                            title="google-maps"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit" />

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

                {/* Info Cards for each information */}
                {WHERE_WE_ARE_INFO_CARD.map((card, index) => (
                    <CustomInfoCard
                        key={index}
                        title={card.title}
                        description={card.description} />
                ))}

            </CustomSectionContainer>
        </>

    );
}

export default WhereWeAre;