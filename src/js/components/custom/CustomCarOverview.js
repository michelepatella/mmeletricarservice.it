import {Flex} from "antd";
import {USED_CARS_OVERVIEW_INFO} from "../../utils/const";
import {handleTextOverviewStyle} from "../../logic/usedCarsStyleHandler";
import CustomText from "./CustomText";

/**
 * Custom Car Overview
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomCarOverview (props) {
    return (

        <Flex
            className="custom-used-cars-card-flex"
            gap="small"
            align="start">

            {/* Overview information */}
            {
                USED_CARS_OVERVIEW_INFO.map((info) => (
                    <div className="used-cars-overview-info-container">

                        {/* Icon */}
                        <img src={info.icon}/>

                        {/* Title (if it needs to be shown) */}
                        {
                            props.isTitleVisible ?
                                <CustomText
                                    type="description"
                                    text={info.title}
                                    disableAnimation={true}
                                    style={{
                                        fontWeight: 'bold',
                                        ...handleTextOverviewStyle() }} />
                                : null
                        }

                        {/* Text */}
                        <CustomText
                            type="description"
                            text={props.car[info.name]}
                            disableAnimation={true}
                            style={handleTextOverviewStyle()} />

                    </div>
                ))
            }

        </Flex>

    );
}

export default CustomCarOverview;