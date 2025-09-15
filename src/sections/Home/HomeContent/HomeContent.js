import {
	HOME_LOGO_ALT,
	HOME_LOGO_CLASS_NAME,
	HOME_SECTION_ID,
	HOME_SUBTITLE,
	HOME_SUBTITLE_CLASS_NAME,
	HOME_TITLE,
	HOME_TITLE_CLASS_NAME,
} from "../../../utils/const/sections/homeConst";
import { COMPANY_LOGO_LINK } from "../../../utils/internalLinks";

/**
 * This component represents the content
 * of the Home section. It contains the logo of the company
 * as image, title and subtitle.
 * @returns {Element}
 * @constructor
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
			<h3
				className={HOME_SUBTITLE_CLASS_NAME}
				dangerouslySetInnerHTML={{
					__html: HOME_SUBTITLE,
				}}
			/>
		</div>
	);
}

export default HomeContent;
