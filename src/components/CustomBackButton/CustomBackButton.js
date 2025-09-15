import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { CUSTOM_BACK_BUTTON_CLASS_NAME } from "../../utils/const/components/customBackButtonConst";
import { CUSTOM_TEXT_TYPES } from "../../utils/const/components/customTextConst";
import { USED_CARS_DRAWER_BACK_BUTTON_LABEL } from "../../utils/const/sections/usedCarsConst";
import CustomText from "../CustomText/CustomText";

/**
 * This component defines a custom back
 * button used in the entire web application. It is
 * characterized by a symbol '<' and a label for clarity.
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomBackButton() {
	return (
		<span className={CUSTOM_BACK_BUTTON_CLASS_NAME}>
			{/* Close button symbol */}
			<LeftOutlined />

			{/* Label for the close button */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.BODY}
				disableAnimation
				text={USED_CARS_DRAWER_BACK_BUTTON_LABEL}
			/>
		</span>
	);
}

export default CustomBackButton;
