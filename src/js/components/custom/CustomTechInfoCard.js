import {Flex} from "antd";
import {USED_CARS_OVERVIEW_INFO} from "../../utils/const";
import {handleCustomTechInfoCardTextOverviewStyle} from "../../logic/styleHandler";
import CustomText from "./CustomText";

/**
 * Custom Te
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomTechInfoCard (props) {
    return (

        <Flex
            className="custom-used-cars-card-flex"
            gap="small"
            align="start">

            {/* Overview technical information */}
            {
                USED_CARS_OVERVIEW_INFO.map((info) => (
                    <div className="used-cars-overview-info-container">

                        {/* Icon */}
                        <img src={info.icon} />

                        {/* Text */}
                        <CustomText
                            type="description"
                            text={props.car[info.name]}
                            disableAnimation={true}
                            style={handleCustomTechInfoCardTextOverviewStyle()} />
                    </div>
                ))
            }

        </Flex>

    );
}

export default CustomTechInfoCard;