import { Layout } from 'antd';
import HomeHeader from "../components/home/HomeHeader";
import HomeContent from "../components/home/HomeContent";
import CustomBackgroundContainer from "../components/custom/CustomBackgroundContainer";
import '../../styles/sections/home.css';

/**
 * Home Layout definition
 */
const {
    Header,
    Content
} = Layout;

/**
 * Home section
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    return (

        <>
            <CustomBackgroundContainer
                image="/images/home-image.jpeg"
                custStyle={{marginBottom: 'var(--section_margin_bottom)'}}>

                {/* Home Layout */}
                <Layout
                    className="home-layout"
                    id="home">

                    {/* Home header */}
                    <Header className="home-header">
                        <HomeHeader/>
                    </Header>

                    {/* Home content */}
                    <Content className="home-content">
                        <HomeContent/>
                    </Content>

                </Layout>

            </CustomBackgroundContainer>
        </>

    );
}

export default Home;