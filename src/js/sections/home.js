import { Layout } from 'antd';
import HomeHeader from "../components/home/HomeHeader";
import HomeContent from "../components/home/HomeContent";
import '../../styles/sections/home.css';

/**
 * "Home" Layout definition
 */
const {
    Header,
    Content
} = Layout;

/**
 * "Home" section
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    return (

        <>
            {/* "Home" Layout */}
            <Layout
                className="home-layout"
                id="home">

                {/* "Home" header */}
                <Header className="home-header">
                    <HomeHeader/>
                </Header>

                {/* "Home" content */}
                <Content className="home-content">
                    <HomeContent/>
                </Content>
            </Layout>
        </>

    );
}

export default Home;