import {Flex} from "antd";
import {USED_CAR_OVERVIEW} from "../../utils/const";
import {handleTextOverviewStyle} from "../../logic/usedCarsStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * Used Car Overview
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarOverview (props) {
    return (

        <Flex
            className="used-car-overview-flex"
            gap="small"
            align="start">

            {/* Overview information */}
            {
                USED_CAR_OVERVIEW.map((info, index) => (
                    <div
                        key={index}
                        className="used-car-overview-info-container">

                        {/* Icon */}
                        <img src={info.icon}/>

                        {/* Title (if it needs to be shown) */}
                        {
                            props.isTitleVisible ?
                                <CustomText
                                    type="body"
                                    text={info.title}
                                    disableAnimation={true}
                                    style={{
                                        fontWeight: 'bold',
                                        ...handleTextOverviewStyle() }} />
                                : null
                        }

                        {/* Text */}
                        <CustomText
                            type="body"
                            text={props.car[info.name]}
                            disableAnimation={true}
                            style={handleTextOverviewStyle()} />

                    </div>
                ))
            }

        </Flex>

    );
}

export default UsedCarOverview;