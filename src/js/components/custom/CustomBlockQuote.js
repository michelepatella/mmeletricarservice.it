/**
 * This component defines the custom block quote
 * used across application to highlight text and
 * any other kind of content received as children.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function CustomBlockQuote({ children }) {
	return (
		// Apply the custom blockquote to children
		<blockquote className="custom-block-quote">
			{children}
		</blockquote>
	);
}

export default CustomBlockQuote;
