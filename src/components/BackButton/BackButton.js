import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import {
	BACK_BUTTON_LABEL,
	BACK_BUTTON_CLASS_NAME,
} from "./const";
import { CUSTOM_TEXT_TYPES } from "../../utils/const";
import CustomText from "../CustomText/CustomText";

/**
 * This component defines a back
 * button used in the entire web application. It is
 * characterized by a symbol '<' and a label for clarity.
 * @returns {React.JSX.Element} — The back button component.
 */
function BackButton() {
	return (
		<span className={BACK_BUTTON_CLASS_NAME}>
			{/* Close button symbol */}
			<LeftOutlined />

			{/* Label for the close button */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.BODY}
				disableAnimation
				text={BACK_BUTTON_LABEL}
			/>
		</span>
	);
}

export default BackButton;
