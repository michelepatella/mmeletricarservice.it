import React from "react";
import {ArrowLeftOutlined} from "@ant-design/icons";
import CustomText from "./CustomText";

/**
 * Custom Back Button
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomBackButton() {
    return (

        <span className="close-label">
            {/* Close button */}
            <ArrowLeftOutlined/>

            {/* Close label */}
            <CustomText
                type="caption"
                text="Indietro"/>
        </span>

    );
}

export default CustomBackButton;