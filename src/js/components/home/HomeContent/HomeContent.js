import {
	HOME_TITLE,
	HOME_SUBTITLE,
} from "../../../utils/const";
import { COMPANY_LOGO_LINK } from "../../../utils/internal_links";

/**
 * This component represents the content
 * of the Home section. It contains the logo of the company
 * as image, title and subtitle.
 * @returns {Element}
 * @constructor
 */
function HomeContent() {
	return (
		<div id="/home">
			{/* Logo of the company */}
			<img
				className="logo-image"
				src={COMPANY_LOGO_LINK}
				alt="company-logo-image"
			/>

			{/* Title */}
			<h1
				className="home-title"
				dangerouslySetInnerHTML={{
					__html: HOME_TITLE,
				}}
			/>

			{/* Subtitle */}
			<h3
				className="home-subtitle"
				dangerouslySetInnerHTML={{
					__html: HOME_SUBTITLE,
				}}
			/>
		</div>
	);
}

export default HomeContent;
