import { handleContainerStyle } from "../../../logic/style-handling/backgroundContainerStyleHandler";

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
	// to get the final background container style-handling
	const style = {
		...handleContainerStyle(image),
		...custStyle,
	};

	return (
		<div
			data-testid="background-container-motion-section"
			style={style}
		>
			{children}
		</div>
	);
}

export default BackgroundContainer;
