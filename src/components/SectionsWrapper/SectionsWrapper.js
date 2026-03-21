import React from "react";
import { SECTIONS_WRAPPER_CLASS_NAME } from "./const.js";

/**
 * This component represents the wrapper for all the
 * sections of the webapp.
 * @param children — The sections to be displayed into the wrapper.
 * @returns {JSX.Element} — The section wrapper component.
 */
function SectionsWrapper({ children }) {
	return (
		<div className={SECTIONS_WRAPPER_CLASS_NAME}>
			{children}
		</div>
	);
}

export default SectionsWrapper;
