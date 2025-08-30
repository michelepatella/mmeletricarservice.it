import { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

/**
 * This component defines the custom text (via <p>) shared
 * across the whole web application. A custom text is
 * characterized by an entry animation (triggered as soon as
 * the custom text becomes visible in the browser), enabled by default.
 * The custom text has predefined styles and customized styles
 * that may overwrite custom styles, if needed.
 * A custom text may be of type:
 * - Heading: if used as heading in the web application (e.g., titles).
 * - Subheading: if used as subheading in the web application (e.g., subtitles).
 * - Body: if used as simple text in the web application (e.g., descriptions).
 * - Caption: if used as non-relevant text in the web application (e.g., footer text).
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CustomText(props) {
	// Definition of a text reference, useful to generate
	// an entry animation when the text becomes visible
	const textRef = useRef(null);
	useIntersectionObserver(textRef);

	// Combine predefined and customized styles
	// to get the final text style-handling
	const style = {
		...(props.disableAnimation
			? {
					opacity: "1",
				}
			: {}),
		...props.style,
	};

	return (
		// The custom text, provided as <p> element
		<p
			className={"custom-" + props.type}
			ref={props.disableAnimation ? null : textRef}
			style={style}
			dangerouslySetInnerHTML={{
				__html: props.text,
			}}
		/>
	);
}

export default CustomText;
