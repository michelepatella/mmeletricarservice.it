import { HOME_TITLE, HOME_SUBTITLE } from "../../utils/const";

/**
 * This component represents the content
 * of the Home section. It contains just a title and subtitle.
 * @returns {Element}
 * @constructor
 */
function HomeContent() {
	return (
		<>
			<div id="/home">
				{/* Title */}
				<h1
					className="home-title"
					dangerouslySetInnerHTML={{
						__html: HOME_TITLE,
					}}
				/>

				{/* Subtitle */}
				<p
					className="home-subtitle"
					dangerouslySetInnerHTML={{
						__html: HOME_SUBTITLE,
					}}
				/>
			</div>
		</>
	);
}

export default HomeContent;
