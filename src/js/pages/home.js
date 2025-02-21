import '../../styles/pages/home.css';
import HomeHeader from "../components/home/HomeHeader";
import HomeContent from "../components/home/HomeContent";
import { Layout } from 'antd';

/**
 * "home" page layout definition
 */
const { Header, Content } = Layout;

/**
 * That's the "home" page
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {

    return (
        <>
            {/* Home Layout */}
            <Layout className="home-layout" id="home">

                {/* "home" header */}
                <Header className="home-header">
                    <HomeHeader></HomeHeader>
                </Header>

                {/* "home" content */}
                <Content className="home-content">
                    <HomeContent></HomeContent>
                </Content>
            </Layout>
        </>
    );
}

export default Home;