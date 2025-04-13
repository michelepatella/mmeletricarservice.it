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

                        {/* Global Flex container (vertical) */}
                        <Flex vertical>

                            {/* Flex container for icon + info name (horizontal) */}
                            <Flex gap="small">

                                {/* Icon */}
                                <img src={info.icon}/>

                                {/* Info title, if its needs to be shown, otherwise only the text */}
                                <CustomText
                                    type="caption"
                                    text={props.isTitleVisible ?
                                        info.title : props.usedCarOverview[info.name]}
                                    disableAnimation={true}
                                    style={handleTextOverviewStyle(props.isTitleVisible)} />

                            </Flex>

                            {/* Text (in case the title is visible and the text is now below) */}
                            {
                                props.isTitleVisible ?
                                    <CustomText
                                        type="caption"
                                        text={props.usedCarOverview[info.name]}
                                        disableAnimation={true}
                                        style={handleTextOverviewStyle()} />
                                : null
                            }

                        </Flex>

                    </div>
                ))
            }

        </Flex>

    );
}

export default UsedCarOverview;