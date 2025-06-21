import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { BACK_BUTTON_LABEL } from "../../utils/const";
import CustomText from "./CustomText";

/**
 * This component defines a custom back
 * button used in the entire web application. It is
 * characterized by a symbol '<' and a label for clarity.
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomBackButton() {
	return (
		<span className="custom-back-button">
			{/* Close button symbol */}
			<LeftOutlined />

			{/* Label for the close button */}
			<CustomText
				type="body"
				disableAnimation={true}
				text={BACK_BUTTON_LABEL}
			/>
		</span>
	);
}

export default CustomBackButton;
