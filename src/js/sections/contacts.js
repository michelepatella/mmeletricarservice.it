import { Layout } from "antd";
import { Helmet } from "react-helmet";
import {
    HELMET_CONTACTS_DESCRIPTION,
    HELMET_CONTACTS_TITLE
} from "../utils/const";
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
      {/* React Helmet */}
      <Helmet>
        <title>{HELMET_CONTACTS_TITLE}</title>
        <meta
          name="description"
          content={HELMET_CONTACTS_DESCRIPTION}
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
