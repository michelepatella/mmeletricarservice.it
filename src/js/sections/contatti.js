import { Layout } from 'antd';
import ContattiFooter from "../components/contatti/ContattiFooter";
import ContattiContent from "../components/contatti/ContattiContent";
import '../../styles/sections/contatti.css';

/**
 * "Contatti" Layout definition
 */
const {
    Content,
    Footer
} = Layout;

/**
 * "Contatti" section
 * @returns {JSX.Element}
 * @constructor
 */
function Contatti() {
    return (

        <>
            {/* "Contatti" Layout */}
            <Layout
                className="contatti-layout"
                id="contatti">

                {/* "Contatti" content */}
                <Content className="contatti-content">
                    <ContattiContent/>
                </Content>

                {/* "Contatti" footer */}
                <Footer className="contatti-footer">
                    <ContattiFooter/>
                </Footer>

            </Layout>
        </>

    );
}

export default Contatti;