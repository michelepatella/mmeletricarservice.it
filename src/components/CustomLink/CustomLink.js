import { CUSTOM_LINK_CLASS_NAME } from "../../utils/const/components/customLinkConst";

/**
 * This component represents the custom link used
 * across the whole application. It receives a link
 * (href attribute), as well as a text to be displayed
 * within <a> tag.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CustomLink(props) {
	return (
		<a
			className={CUSTOM_LINK_CLASS_NAME}
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.text}
		</a>
	);
}

export default CustomLink;
