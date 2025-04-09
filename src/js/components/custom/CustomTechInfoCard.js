import CustomText from "./CustomText";
import React from "react";
import {Flex} from "antd";

/**
 * Custom Te
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomTechInfoCard (props) {
    return (
        <>
            {
                props.overview ?

                    <Flex
                        className="custom-used-cars-card-flex"
                        gap="small"
                        align="start">

                        <img src="/icons/phone_icon.svg"
                            style={{ opacity: 0.5 }} />

                        <CustomText
                            type="description"
                            text={props.car.fuel}
                            disableAnimation={true}
                            style={{opacity: 0.7}} />

                    </Flex> : null
            }
        </>
    );
}

export default CustomTechInfoCard;