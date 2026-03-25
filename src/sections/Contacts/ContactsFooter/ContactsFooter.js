import React from "react";
import {
	CONTACTS_FOOTER_TEXT,
	CONTACTS_FOOTER_TEXT_CLASS_NAME,
	LEGAL_NOTES_LINK,
	LEGAL_NOTES_TEXT,
} from "./const.js";
import {
	COOKIE_POLICY_LINK,
	COOKIE_POLICY_TEXT,
	PRIVACY_POLICY_LINK,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const.js";
import Link from "../../../components/Link/Link.js";

/**
 * This component represents the footer of the 'Contacts' section 
 * which contains all the company information, as well as links to privacy, 
 * cookie, and legal notes documents.
 * @returns {Element} — The footer of the 'Contacts' section.
 */
function ContactsFooter() {
	return (
		<p className={CONTACTS_FOOTER_TEXT_CLASS_NAME}>
			{CONTACTS_FOOTER_TEXT}
			<br></br>
			{/* Privacy policy link */}
			<Link
				href={PRIVACY_POLICY_LINK}
				text={PRIVACY_POLICY_TEXT + " | "}
			/>

			{/* Cookie policy link */}
			<Link
				href={COOKIE_POLICY_LINK}
				text={COOKIE_POLICY_TEXT + " | "}
			/>

			{/* Legal notes link */}
			<Link
				href={LEGAL_NOTES_LINK}
				text={LEGAL_NOTES_TEXT}
			/>
		</p>
	);
}

export default ContactsFooter;
