import React from "react";
import { SERVIZI_INFO_CARDS } from "../../utils/constants";
import CustomInfoCard from "../../components/custom/CustomInfoCard";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";

/**
 * "Altri servizi" section
 * @returns {Element}
 * @constructor
 */
function AltriServizi() {
    return (

        <CustomSectionContainer id="altri-servizi">

            {/* Info Card for each service */}
            {SERVIZI_INFO_CARDS.map((servizio, index) => (
                <CustomInfoCard
                    key={index}
                    title={servizio.title}
                    description={servizio.description}
                    icon={servizio.icon}
                />
            ))}

        </CustomSectionContainer>

    );
}

export default AltriServizi;