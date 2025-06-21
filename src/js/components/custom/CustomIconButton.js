/**
 * This component defines a custom icon button, which
 * has just an icon (without any text).
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomIconButton(props) {
	return (
		<button className="custom-icon-button" onClick={props.onClick}>
			{/* Icon of the button */}
			<img src={props.src} alt="button-icon" />
		</button>
	);
}

export default CustomIconButton;
