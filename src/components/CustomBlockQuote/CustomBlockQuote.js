import { CUSTOM_BLOCK_QUOTE_CLASS_NAME } from "../../utils/const/components/customBlockQuoteConst";

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
		<blockquote className={CUSTOM_BLOCK_QUOTE_CLASS_NAME}>
			{children}
		</blockquote>
	);
}

export default CustomBlockQuote;
