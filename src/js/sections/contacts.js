import { Layout } from "antd";
import ContactsFooter from "../components/contacts/ContactsFooter";
import ContactsContent from "../components/contacts/ContactsContent";

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
