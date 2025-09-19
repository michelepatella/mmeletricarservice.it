import { Layout } from "antd";
import {
	HOME_CONTENT_CLASS_NAME,
	HOME_HEADER_CLASS_NAME,
	HOME_LAYOUT_CLASS_NAME,
} from "./const";
import {
	DOTTED_BACKGROUND_IMAGE_LINK,
	HOME_SECTION_ID,
} from "../../../utils/const";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeContent from "../HomeContent/HomeContent";
import SectionBackground from "../../../components/SectionBackground/SectionBackground";

// Home Layout definition:
// it's composed by a header and a content
const { Header, Content } = Layout;

/**
 * This component represents the Home section. It is divided into two parts:
 * - Header: contains contact buttons to rapidly contact the company
 * - Content: contains title and description
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
	return (
		<>
			{/* Background container to contain the whole section and
       use a customized background */}
			<SectionBackground
				image={DOTTED_BACKGROUND_IMAGE_LINK}
			>
				{/* Home Layout */}
				<Layout
					className={HOME_LAYOUT_CLASS_NAME}
					id={HOME_SECTION_ID}
				>
					{/* Home header */}
					<Header className={HOME_HEADER_CLASS_NAME}>
						<HomeHeader />
					</Header>

					{/* Home content */}
					<Content className={HOME_CONTENT_CLASS_NAME}>
						<HomeContent />
					</Content>
				</Layout>
			</SectionBackground>
		</>
	);
}

export default Home;
