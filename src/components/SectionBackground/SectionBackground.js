import { SECTION_BACKGROUND_TEST_ID } from "./const";
import { getSectionBackgroundStyle } from "./styleHandler";

/**
 * This component defines the background container of a section.
 * It is used for containing a background image shown in a section.
 * @param image
 * @param children
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function SectionBackground({ image, children, custStyle }) {
	// Combine predefined and customized styles
	// to get the final background container style
	const style = {
		...getSectionBackgroundStyle(image),
		...custStyle,
	};

	return (
		<div
			data-testid={SECTION_BACKGROUND_TEST_ID}
			style={style}
		>
			{children}
		</div>
	);
}

export default SectionBackground;
