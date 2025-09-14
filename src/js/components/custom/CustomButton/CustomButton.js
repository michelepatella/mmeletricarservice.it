import { Button } from "antd";
import {
	CUSTOM_BUTTON_ICON_ALT,
	CUSTOM_BUTTON_TYPE,
	CUSTOM_BUTTON_TYPES,
} from "../../../utils/const";

/**
 * This component defines a custom button
 * shared across the entire web application.
 * It may be a:
 * - Custom button: a generic custom button.
 * - Contact button: a button to contact the company.
 * - CTA button: a CTA button, which is more emphasized than a simple contact button.
 * Any button has predefined styles combined with customized styles (if any). Any button
 * may overwrite predefined style with its customized ones, if needed.
 * The button may contain an icon (is specified).
 * @returns {JSX.Element}
 * @constructor
 * @param props
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
