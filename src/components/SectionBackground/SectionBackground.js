import React from "react";
import { SECTION_BACKGROUND_TEST_ID } from "./const.js";
import { getSectionBackgroundStyle } from "./style-handler.js";

/**
 * This component defines the background container of the sections.
 * @param image — The image to be displayed as background.
 * @param children — Children to be displayed over the background.
 * @param custStyle — Custom CSS style.
 * @returns {JSX.Element} — The section background component.
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
