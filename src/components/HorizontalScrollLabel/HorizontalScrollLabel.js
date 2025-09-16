import React from "react";
import { CUSTOM_TEXT_TYPES } from "../../utils/const";
import { HORIZONTAL_SCROLL_LABEL_TEXT } from "./const";
import { getHorizontalScrollLabelStyle } from "./styleHandler";
import CustomText from "../CustomText/CustomText";

/**
 * This component defines the scroll label used
 * across the app to indicate the user to scroll content
 * horizontally.
 * @returns {Element}
 * @constructor
 */
function HorizontalScrollLabel() {
	return (
		<CustomText
			type={CUSTOM_TEXT_TYPES.BODY}
			text={HORIZONTAL_SCROLL_LABEL_TEXT}
			style={getHorizontalScrollLabelStyle(true)}
		/>
	);
}

export default HorizontalScrollLabel;
