import {
	CONTACT_FOOTER_TEXT,
	CONTACTS_FOOTER_CLASS_NAME,
	CONTACTS_FOOTER_TEXT_CLASS_NAME,
	COOKIE_POLICY_TEXT,
	LEGAL_NOTES_TEXT,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const";
import {
	COOKIE_POLICY_LINK,
	LEGAL_NOTES_LINK,
	PRIVACY_POLICY_LINK,
} from "../../../utils/internalLinks";
import CustomLink from "../../../components/CustomLink/CustomLink";

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
		<div className={CONTACTS_FOOTER_CLASS_NAME}>
			{/* Footer text */}
			<p className={CONTACTS_FOOTER_TEXT_CLASS_NAME}>
				{CONTACT_FOOTER_TEXT}
				<br></br>
				{/* Privacy policy link */}
				<CustomLink
					href={PRIVACY_POLICY_LINK}
					text={PRIVACY_POLICY_TEXT + " | "}
				/>

				{/* Cookie policy link */}
				<CustomLink
					href={COOKIE_POLICY_LINK}
					text={COOKIE_POLICY_TEXT + " | "}
				/>

				{/* Legal notes link */}
				<CustomLink
					href={LEGAL_NOTES_LINK}
					text={LEGAL_NOTES_TEXT}
				/>
			</p>
		</div>
	);
}

export default ContactsFooter;
