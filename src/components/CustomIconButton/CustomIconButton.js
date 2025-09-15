import {
	CUSTOM_ICON_BUTTON_IMAGE_ALT,
	CUSTOM_ICON_BUTTON_CLASS_NAME,
} from "./const";

/**
 * This component defines a custom icon button, which
 * has just an icon (without any text).
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomIconButton(props) {
	return (
		<button
			className={CUSTOM_ICON_BUTTON_CLASS_NAME}
			onClick={props.onClick}
		>
			{/* Icon of the button */}
			<img src={props.src} alt={CUSTOM_ICON_BUTTON_IMAGE_ALT} />
		</button>
	);
}

export default CustomIconButton;
