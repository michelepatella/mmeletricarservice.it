import {
	CONTACTS_FOOTER_TEXT,
	CONTACTS_FOOTER_TEXT_CLASS_NAME,
	LEGAL_NOTES_LINK,
	LEGAL_NOTES_TEXT,
} from "./const";
import {
	COOKIE_POLICY_LINK,
	COOKIE_POLICY_TEXT,
	PRIVACY_POLICY_LINK,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const";
import Link from "../../../components/Link/Link";

/**
 * This component represents the footer
 * of the Contact section. It contains a footer text including
 * all company information, along with link to privacy, cookie, and legal
 * notes documents.
 * @returns {Element}
 * @constructor
 */
function ContactsFooter() {
	return (
		// Footer text
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
