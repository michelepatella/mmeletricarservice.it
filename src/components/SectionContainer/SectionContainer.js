import React from "react";
import { SECTION_CONTAINER_CLASS_NAME } from "./const.js";

/**
 * This component represents the section container for containing
 * all the components which made up a section.
 * @param children — The children to be displayed into
 * the section container.
 * @param id — ID of the section.
 * @param custStyle — Custom CSS style.
 * @returns {JSX.Element} — The section container component.
 */
function SectionContainer({ children, id, custStyle }) {
	// Use only the customized styles
	// to get the final section container style
	const style = {
		...custStyle,
	};

	return (
		// The section division containing all the
		// children representing the section components
		<div
			id={id}
			className={SECTION_CONTAINER_CLASS_NAME}
			style={style}
		>
			{children}
		</div>
	);
}

export default SectionContainer;
