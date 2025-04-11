import { ALL_SERVICES_INFO_CARDS } from "../../utils/const";
import CustomInfoCard from "../../components/custom/CustomInfoCard";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import {handleSectionNameStyle} from "../../logic/customSectionHeaderStyleHandler";

/**
 * All services section
 * @returns {Element}
 * @constructor
 */
function AllServices() {
    return (

        <CustomSectionContainer id="all-services">

            {/* Section title */}
            <CustomText
                type="description"
                text={'• TUTTI I SERVIZI'}
                style={handleSectionNameStyle()} />

            {/* Info Card for each service */}
            {ALL_SERVICES_INFO_CARDS.map((service, index) => (
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