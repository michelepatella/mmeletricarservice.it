import React from "react";
import { Layout } from "antd";
import {
	CONTACTS_CONTENT_CLASS_NAME,
	CONTACTS_FOOTER_CLASS_NAME,
	CONTACTS_LAYOUT_CLASS_NAME,
} from "./const.js";
import { CONTACTS_SECTION_ID } from "../../../utils/const.js";
import ContactsContent from "../ContactsContent/ContactsContent.js";
import ContactsFooter from "../ContactsFooter/ContactsFooter.js";

// Define layout (content + footer)
const { Content, Footer } = Layout;

/**
 * This component represents the 'Contacts' section which is
 * composed of:
 * - Content: Contains all the company contacts shown via buttons.
 * - Footer: Contains legal information about the company, as well as links
 *   to privacy, cookie, and legal documents.
 * @returns {JSX.Element} — 'Contacts' section.
 */
function Contacts() {
	return (
		<>
			{/* Layout */}
			<Layout
				className={CONTACTS_LAYOUT_CLASS_NAME}
				id={CONTACTS_SECTION_ID}
			>
				{/* Content */}
				<Content className={CONTACTS_CONTENT_CLASS_NAME}>
					<ContactsContent />
				</Content>

				{/* Footer */}
				<Footer className={CONTACTS_FOOTER_CLASS_NAME}>
					<ContactsFooter />
				</Footer>
			</Layout>
		</>
	);
}

export default Contacts;
