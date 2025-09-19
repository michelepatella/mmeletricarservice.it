import { LINK_CLASS_NAME } from "./const";

/**
 * This component represents the link used
 * across the whole application. It receives a link
 * (href attribute), as well as a text to be displayed
 * within <a> tag.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Link(props) {
	return (
		<a
			className={LINK_CLASS_NAME}
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.text}
		</a>
	);
}

export default Link;
