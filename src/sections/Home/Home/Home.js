import React from "react";
import { Layout } from "antd";
import {
	HOME_CONTENT_CLASS_NAME,
	HOME_HEADER_CLASS_NAME,
	HOME_LAYOUT_CLASS_NAME,
} from "./const.js";
import {
	DOTTED_BACKGROUND_IMAGE_LINK,
	HOME_SECTION_ID,
} from "../../../utils/const.js";
import HomeHeader from "../HomeHeader/HomeHeader.js";
import HomeContent from "../HomeContent/HomeContent.js";
import SectionBackground from "../../../components/SectionBackground/SectionBackground.js";

// Layout definition
const { Header, Content } = Layout;

/**
 * This component represents the 'Home section' which is composed of:
 * - Header: Contains contact buttons.
 * - Content: Contains title and description.
 * @returns {JSX.Element} — 'Home' section.
 */
function Home() {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			{/* Layout */}
			<Layout
				className={HOME_LAYOUT_CLASS_NAME}
				id={HOME_SECTION_ID}
			>
				{/* Header */}
				<Header className={HOME_HEADER_CLASS_NAME}>
					<HomeHeader />
				</Header>

				{/* Content */}
				<Content className={HOME_CONTENT_CLASS_NAME}>
					<HomeContent />
				</Content>
			</Layout>
		</SectionBackground>
	);
}

export default Home;
