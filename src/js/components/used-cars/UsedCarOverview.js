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
        <>
            {
                USED_CAR_OVERVIEW.map((info, index) => (
                    <div
                        key={index}
                        className="used-car-overview-container">

                        {/* Global Flex container (vertical) */}
                        <Flex vertical>

                            {/* Flex container for icon + info name (horizontal) */}
                            <Flex gap="small">

                                {/* Icon */}
                                <img
                                    src={info.icon}
                                    alt="icon" />

                                {/* Info title, if its needs to be shown, otherwise show the text */}
                                <CustomText
                                    type="body"
                                    text={props.showTitle ?
                                        info.title : props.usedCarOverview[info.name]}
                                    disableAnimation={true}
                                    style={handleTextOverviewStyle(props.showTitle)} />

                            </Flex>

                            {/* Text (in case the title is visible and the text is now below it) */}
                            {
                                props.showTitle &&
                                <CustomText
                                    type="body"
                                    text={props.usedCarOverview[info.name]}
                                    disableAnimation={true}
                                    style={handleTextOverviewStyle()} />
                            }

                        </Flex>

                    </div>
                ))
            }
        </>

    );
}

export default UsedCarOverview;