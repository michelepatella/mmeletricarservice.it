import { Layout } from "antd";
import HomeHeader from "../components/home/HomeHeader";
import HomeContent from "../components/home/HomeContent";
import BackgroundContainer from "../components/sections/BackgroundContainer";
import { Helmet } from "react-helmet";

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
        <title>MM Eletricar Service - Home</title>
        <meta
          name="description"
          content="MM Eletricar Service, officina elettrauto e vendita di auto usate a Gravina in Puglia (BA)."
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
