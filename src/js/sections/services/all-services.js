import React from "react";
import { SERVICE_INFO_CARDS } from "../../utils/const";
import CustomInfoCard from "../../components/custom/CustomInfoCard";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";

/**
 * All services section
 * @returns {Element}
 * @constructor
 */
function AllServices() {
    return (

        <CustomSectionContainer id="all-services">

            {/* Info Card for each service */}
            {SERVICE_INFO_CARDS.map((service, index) => (
                <CustomInfoCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />
            ))}

        </CustomSectionContainer>

    );
}

export default AllServices;