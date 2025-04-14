import React from "react";
import {LeftOutlined} from "@ant-design/icons";
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
            <LeftOutlined/>

            {/* Close label */}
            <CustomText
                type="body"
                disableAnimation={true}
                style={{ opacity: 1 }}
                text="Indietro" />
        </span>

    );
}

export default CustomBackButton;