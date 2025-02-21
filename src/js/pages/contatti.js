import '../../styles/pages/contatti.css';
import ContattiFooter from "../components/contatti/ContattiFooter";
import ContattiContent from "../components/contatti/ContattiContent";
import { Layout } from 'antd';

/**
 * "contatti" page layout definition
 */
const { Content, Footer} = Layout;

/**
 * That's the "contatti" page
 * @returns {JSX.Element}
 * @constructor
 */
function Contatti() {

    return (

        <>
            {/* Layout of the "contatti" page */}
            <Layout className="contatti-layout" id="contatti">

                {/* "contatti" content */}
                <Content className="contatti-content">
                    <ContattiContent></ContattiContent>
                </Content>

                {/* "contatti" footer */}
                <Footer className="contatti-footer">
                    <ContattiFooter></ContattiFooter>
                </Footer>
            </Layout>
        </>
    );
}

export default Contatti;