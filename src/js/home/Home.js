import '../../styles/home/Home.css';
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import { Layout } from 'antd';

/**
 * home page layout definition
 */
const { Header, Content } = Layout;

/**
 * This component contains the layout of the home page (header + content)
 * @returns {Element}
 * @constructor
 */
function Home() {

    return (
        <Layout className="home-layout" id="home">

            {/* Header Section */}
            <Header className="home-header">
                <HomeHeader></HomeHeader>
            </Header>

            {/* Content Section */}
            <Content className="home-content">
                <HomeContent></HomeContent>
            </Content>
        </Layout>
    );
}

export default Home;