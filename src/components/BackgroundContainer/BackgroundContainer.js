import { BACKGROUND_CONTAINER_TEST_ID } from "../../utils/const/components/backgroundContainerConst";
import { handleContainerStyle } from "../../styleLogic/backgroundContainerStyleHandler";

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
		...handleContainerStyle(image),
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
