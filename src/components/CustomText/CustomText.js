import { useRef } from "react";
import {
	CUSTOM_TEXT_CLASS_NAME_PREFIX,
	CUSTOM_TEXT_DEFAULT_OPACITY,
} from "./const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

/**
 * This component defines the custom text (via <p>) shared
 * across the whole web application. A custom text is
 * characterized by an entry animation (triggered as soon as
 * the custom text becomes visible in the browser), enabled by default.
 * The custom text has predefined styles and customized styles
 * that may overwrite custom styles, if needed.
 * A custom text may be of type:
 * - Super-heading: if used as heading for sections (i.e., section titles).
 * - Heading: if used as heading for components (e.g., component titles).
 * - Subheading: if used as subheading in the web application (e.g., subtitles).
 * - Body: if used as simple text in the web application (e.g., descriptions).
 * - Caption: if used as non-relevant text in the web application (e.g., footer text).
 * @param props — Object containing:
 *   - text: string — The text content to display (can include HTML).
 *   - type: string — The type of text (super-heading, heading, subheading, body, caption).
 *   - style: object — Optional custom CSS styles to override default text styles.
 *   - disableAnimation: boolean — If true, disables the entry animation.
 * @returns {JSX.Element} — The custom text component.
 */
function CustomText(props) {
	// Definition of a text reference, useful to generate
	// an entry animation when the text becomes visible
	const textRef = useRef(null);
	useIntersectionObserver(textRef);

	// Combine predefined and customized styles
	// to get the final text style
	const style = {
		...(props.disableAnimation
			? {
					opacity: CUSTOM_TEXT_DEFAULT_OPACITY,
				}
			: {}),
		...props.style,
	};

	return (
		// The custom text, provided as <p> element
		<p
			className={CUSTOM_TEXT_CLASS_NAME_PREFIX + props.type}
			ref={props.disableAnimation ? null : textRef}
			style={style}
			dangerouslySetInnerHTML={{
				__html: props.text,
			}}
		/>
	);
}

export default CustomText;
