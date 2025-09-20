import {
	CIRCLE_LOADING_OUTLINED_IMAGE_LINK,
	LOADING_OUTLINED_CIRCLE_IMAGE_ALT,
	LOADING_OUTLINED_CIRCLE_IMAGE_CLASS_NAME,
	LOADING_OUTLINED_CLASS_NAME,
	LOADING_OUTLINED_LOGO_IMAGE_ALT,
	LOADING_OUTLINED_LOGO_IMAGE_CLASS_NAME,
	LOGO_LOADING_OUTLINED_IMAGE_LINK,
} from "./const";

/**
 * This component defines the loading
 * outlined of the whole web application. It is composed
 * of a circle rotating around company logo image.
 * @param custStyle — Custom CSS style object to override the default style.
 * @returns {JSX.Element} — The loading outlined component.
 */
function LoadingOutlined({ custStyle }) {
	// Get the final custom loading outlined
	// style as a combination of static and dynamic ones
	const style = { ...custStyle };

	return (
		<div
			className={LOADING_OUTLINED_CLASS_NAME}
			style={style}
		>
			{/* Rotating circle of the loading outlined */}
			<img
				className={LOADING_OUTLINED_CIRCLE_IMAGE_CLASS_NAME}
				src={CIRCLE_LOADING_OUTLINED_IMAGE_LINK}
				alt={LOADING_OUTLINED_CIRCLE_IMAGE_ALT}
			/>

			{/* Company logo of the loading outlined */}
			<img
				className={LOADING_OUTLINED_LOGO_IMAGE_CLASS_NAME}
				src={LOGO_LOADING_OUTLINED_IMAGE_LINK}
				alt={LOADING_OUTLINED_LOGO_IMAGE_ALT}
			/>
		</div>
	);
}

export default LoadingOutlined;
