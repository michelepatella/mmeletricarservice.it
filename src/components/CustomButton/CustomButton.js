import React from "react";
import { Button } from "antd";
import {
	CUSTOM_BUTTON_ICON_ALT,
	CUSTOM_BUTTON_TYPE,
	CUSTOM_BUTTON_TYPES,
} from "./const.js";

/**
 * This component defines a custom button, which may be:
 * - A generic custom button.
 * - A button to contact the company.
 * - A CTA button, which is more emphasized than a simple contact button.
 * @param props — Object containing:
 * 	 - text: string — The button label.
 *   - onClick: function — Callback when the button is clicked.
 *   - style: object — Custom CSS styles to override default button styles.
 *   - icon: string — Optional icon URL to display in the button.
 *   - isContact: boolean — Whether the button is a contact button.
 *   - isCta: boolean — Whether the button is a CTA button.
 * @returns {JSX.Element} — The custom button component.
 */
function CustomButton(props) {
	// Combine predefined and customized style to get
	// the final custom button style
	const style = {
		...props.style,
	};

	return (
		<Button
			type={CUSTOM_BUTTON_TYPE}
			className={
				(props.isContact &&
					props.isCta &&
					CUSTOM_BUTTON_TYPES.CTA) ||
				(props.isContact && CUSTOM_BUTTON_TYPES.CONTACT) ||
				CUSTOM_BUTTON_TYPES.GENERAL
			}
			onClick={props.onClick}
			style={style}
		>
			{/* Button's icon (if any) */}
			{props.icon && (
				<img
					src={props.icon}
					alt={CUSTOM_BUTTON_ICON_ALT}
				/>
			)}

			{props.text}
		</Button>
	);
}

export default CustomButton;
