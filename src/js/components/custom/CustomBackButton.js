import React from "react";
import {LeftOutlined} from "@ant-design/icons";
import {BACK_BUTTON_LABEL} from "../../utils/const";
import CustomText from "./CustomText";

/**
 * Custom Back Button
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomBackButton() {
    return (

        <span className="custom-back-button">
            {/* Close button */}
            <LeftOutlined/>

            {/* Close label */}
            <CustomText
                type="body"
                disableAnimation={true}
                text={BACK_BUTTON_LABEL} />
        </span>

    );
}

export default CustomBackButton;