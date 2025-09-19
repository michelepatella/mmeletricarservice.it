import {
	ICON_BUTTON_IMAGE_ALT,
	ICON_BUTTON_CLASS_NAME,
} from "./const";

/**
 * This component defines an icon button, which
 * has just an icon (without any text).
 * @param props
 * @returns {Element}
 * @constructor
 */
function IconButton(props) {
	return (
		<button
			className={ICON_BUTTON_CLASS_NAME}
			onClick={props.onClick}
		>
			{/* Icon of the button */}
			<img
				src={props.src}
				alt={ICON_BUTTON_IMAGE_ALT}
				fetchPriority={props?.fetchPriority}
			/>
		</button>
	);
}

export default IconButton;
