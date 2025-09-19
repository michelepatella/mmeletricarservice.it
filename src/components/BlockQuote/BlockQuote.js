import { BLOCK_QUOTE_CLASS_NAME } from "./const";

/**
 * This component defines the block quote
 * used across application to highlight text and
 * any other kind of content received as children.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function BlockQuote({ children }) {
	return (
		// Apply blockquote to children
		<blockquote className={BLOCK_QUOTE_CLASS_NAME}>
			{children}
		</blockquote>
	);
}

export default BlockQuote;
