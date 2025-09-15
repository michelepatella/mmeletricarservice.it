import { BACKGROUND_CONTAINER_TEST_ID } from "./const";
import { getBackgroundContainerStyle } from "./styleHandler";

/**
 * This component defines the background container of a section.
 * It is used for containing a background image shown in a section.
 * @param image
 * @param children
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function BackgroundContainer({
	image,
	children,
	custStyle,
}) {
	// Combine predefined and customized styles
	// to get the final background container style
	const style = {
		...getBackgroundContainerStyle(image),
		...custStyle,
	};

	return (
		<div
			data-testid={BACKGROUND_CONTAINER_TEST_ID}
			style={style}
		>
			{children}
		</div>
	);
}

export default BackgroundContainer;
