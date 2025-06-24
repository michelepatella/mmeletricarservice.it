import { Layout } from "antd";
import ContactsFooter from "../components/contacts/ContactsFooter";
import ContactsContent from "../components/contacts/ContactsContent";

// Contati Layout definition:
// it's composed by a content and footer
const { Content, Footer } = Layout;

/**
 * This component represents the Contact section. It's composed by two parts:
 * - Content: contains all the company contacts shown via buttons
 * - Footer: contains legal information about the company (Name, Registered Office, etc.),
 *   along with links to privacy, cookie, and legal documents.
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
