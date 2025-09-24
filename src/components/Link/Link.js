import { LINK_CLASS_NAME } from "./const.js";

/**
 * This component represents the link used
 * across the whole application. It receives a link
 * (href attribute), as well as a text to be displayed
 * within <a> tag.
 * @param props — Object containing:
 *   - href: string — The URL the link points to.
 *   - text: string — The text to display inside the <a> element.
 * @returns {JSX.Element} — The link component.
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
