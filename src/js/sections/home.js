import { Layout } from "antd";
import { Helmet } from "react-helmet";
import {HELMET_HOME_DESCRIPTION, HELMET_HOME_TITLE} from "../utils/const";
import HomeHeader from "../components/home/HomeHeader";
import HomeContent from "../components/home/HomeContent";
import BackgroundContainer from "../components/sections/BackgroundContainer";

/**
 * Home Layout definition
 */
const { Header, Content } = Layout;

/**
 * Home section
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>{HELMET_HOME_TITLE}</title>
        <meta
          name="description"
          content={HELMET_HOME_DESCRIPTION}
        />
      </Helmet>

      <BackgroundContainer
        image="/images/home-image.avif"
        custStyle={{ marginBottom: "var(--section_margin_bottom)" }}
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
