import React from "react";
import {
	COMPANY_LOGO_LINK,
	HOME_LOGO_ALT,
	HOME_LOGO_CLASS_NAME,
	HOME_SUBTITLE,
	HOME_SUBTITLE_CLASS_NAME,
	HOME_TITLE,
	HOME_TITLE_CLASS_NAME,
} from "./const.js";
import { HOME_SECTION_ID } from "../../../utils/const.js";

/**
 * This component represents the content of the 'Home' section which
 * contains the logo of the company, title and subtitle.
 * @returns {Element} — The content of the 'Home' section.
 */
function HomeContent() {
	return (
		<div id={HOME_SECTION_ID}>
			{/* Logo of the company */}
			<img
				className={HOME_LOGO_CLASS_NAME}
				src={COMPANY_LOGO_LINK}
				alt={HOME_LOGO_ALT}
			/>

			{/* Title */}
			<h1
				className={HOME_TITLE_CLASS_NAME}
				dangerouslySetInnerHTML={{
					__html: HOME_TITLE,
				}}
			/>

			{/* Subtitle */}
			<h2
				className={HOME_SUBTITLE_CLASS_NAME}
				dangerouslySetInnerHTML={{
					__html: HOME_SUBTITLE,
				}}
			/>
		</div>
	);
}

export default HomeContent;
