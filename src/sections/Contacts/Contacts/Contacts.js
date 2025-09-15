import { Layout } from "antd";
import {
	CONTACTS_CONTENT_CLASS_NAME,
	CONTACTS_FOOTER_CLASS_NAME,
	CONTACTS_LAYOUT_CLASS_NAME,

} from "./const";
import { CONTACTS_SECTION_ID } from "../../../utils/const";
import ContactsContent from "../ContactsContent/ContactsContent";
import ContactsFooter from "../ContactsFooter/ContactsFooter";

// Contact Layout definition:
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
			<Layout
				className={CONTACTS_LAYOUT_CLASS_NAME}
				id={CONTACTS_SECTION_ID}
			>
				{/* Contacts content */}
				<Content className={CONTACTS_CONTENT_CLASS_NAME}>
					<ContactsContent />
				</Content>

				{/* Contacts footer */}
				<Footer className={CONTACTS_FOOTER_CLASS_NAME}>
					<ContactsFooter />
				</Footer>
			</Layout>
		</>
	);
}

export default Contacts;
