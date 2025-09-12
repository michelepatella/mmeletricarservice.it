import { Layout } from "antd";
import HomeHeader from "../components/home/HomeHeader/HomeHeader";
import HomeContent from "../components/home/HomeContent/HomeContent";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

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
			<BackgroundContainer
				custStyle={{
					backgroundSize: "auto !important",
					backgroundRepeat: "repeat !important",
					backgroundOrigin: "right !important",
				}}
				image="/images/dotted-background-image.avif"
			>
				{/* Home Layout */}
				<Layout className="home-layout" id="home">
					{/* Home header */}
					<Header className="home-header">
						<HomeHeader />
					</Header>

					{/* Home content */}
					<Content className="home-content">
						<HomeContent />
					</Content>
				</Layout>
			</BackgroundContainer>
		</>
	);
}

export default Home;
