import {
  WHERE_WE_ARE_INFO,
  WHERE_WE_ARE_DESCRIPTION,
  WHERE_WE_ARE_TITLE,
  GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
  WHERE_WE_ARE_SUBTITLE,
} from "../utils/const";
import {
  handleGoogleMapsContainerStyle,
  handleGoogleMapsUnavailableDescriptionStyle,
} from "../logic/whereWeAreStyleHandler";
import SectionContainer from "../components/sections/SectionContainer";
import CustomText from "../components/custom/CustomText";
import InfoCard from "../components/other/InfoCard";
import SectionHeader from "../components/sections/SectionHeader";

/**
 * Where We Are section
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
        <CustomText type="body" text={WHERE_WE_ARE_DESCRIPTION} />

        {/* Google Maps (shown only in case of cookie accepting) */}
        {props.cookiesAccepted ? (
          <div className="google-maps-container">
            <iframe
              className="google-maps-iframe"
              title="google-maps"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit"
            />
          </div>
        ) : (
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

        {/* Info Cards for each information */}
        {WHERE_WE_ARE_INFO?.map((card, index) => (
          <InfoCard
            key={index}
            title={card?.title}
            description={card?.description}
          />
        ))}
      </SectionContainer>
    </>
  );
}

export default WhereWeAre;
