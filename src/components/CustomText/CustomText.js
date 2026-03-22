import React, { useRef } from "react";
import {
	CUSTOM_TEXT_CLASS_NAME_PREFIX,
	CUSTOM_TEXT_DEFAULT_OPACITY,
} from "./const.js";
import useIntersectionObserver from "../../hooks/use-intersection-observer.js";

/**
 * This component defines the custom text, which may be:
 * - Super-heading: If used as heading for sections.
 * - Heading: If used as heading for components.
 * - Subheading: If used as subheading in the webapp.
 * - Body: If used as simple text in the webapp.
 * - Caption: If used as non-relevant text in the webapp.
 * @param props  Object containing:
 *   - text: string — The text content to display (can include HTML).
 *   - type: string — The type of text (super-heading, heading, subheading, body, caption).
 *   - style: object — Optional custom CSS styles to override default text styles.
 *   - disableAnimation: boolean — If true, disables the entry animation.
 * @returns {JSX.Element} — The custom text component.
 */
function CustomText(props) {
	// Definition of a text reference used to generate
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
