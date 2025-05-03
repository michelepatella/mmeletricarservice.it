import { Layout } from "antd";
import ContactsFooter from "../components/contacts/ContactsFooter";
import ContactsContent from "../components/contacts/ContactsContent";
import { Helmet } from "react-helmet";

/**
 * Contacts Layout definition
 */
const { Content, Footer } = Layout;

/**
 * Contacts section
 * @returns {JSX.Element}
 * @constructor
 */
function Contacts() {
  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>MM Eletricar Service - Contatti</title>
        <meta
          name="description"
          content="Contatta MM Eletricar Service per informazioni, appuntamenti o richieste di assistenza."
        />
      </Helmet>

      {/* Contacts Layout */}
      <Layout className="contacts-layout" id="contacts">
        {/* Contacts content */}
        <Content className="contacts-content">
          <ContactsContent />
        </Content>

        {/* Contacts footer */}
        <Footer className="contacts-footer">
          <ContactsFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default Contacts;
