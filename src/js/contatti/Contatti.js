import '../../styles/contatti/Contatti.css';
import ContattiFooter from "./ContattiFooter";
import ContattiContent from "./ContattiContent";
import { Layout } from 'antd';

/**
 * contatti layout definition
 */
const { Content, Footer} = Layout;

/**
 * This component contains the layout of the contatti section (content + footer)
 * @returns {Element}
 * @constructor
 */
function Contatti() {
    return (
        <Layout className="contatti-layout" id="contatti">

            {/* Content Section */}
            <Content className="contatti-content">
                <ContattiContent></ContattiContent>
            </Content>

            {/* Footer Section */}
            <Footer className="contatti-footer">
                <ContattiFooter></ContattiFooter>
            </Footer>
        </Layout>
    );
}

export default Contatti;