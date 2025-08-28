import {
	CONTACT_FOOTER_TEXT,
	COOKIE_POLICY_TEXT,
	LEGAL_NOTES_TEXT,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const";
import {
	COOKIE_POLICY_LINK,
	LEGAL_NOTES_LINK,
	PRIVACY_POLICY_LINK,
} from "../../../utils/links";

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
		<>
			<div className="contacts-footer">
				{/* Footer text */}
				<p className="contact-footer-text">
					{CONTACT_FOOTER_TEXT}
					<br></br>
					{/* Privacy policy link */}
					<a
						href={PRIVACY_POLICY_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{PRIVACY_POLICY_TEXT}
					</a>{" "}
					|{/* Cookie policy link */}
					<a
						href={COOKIE_POLICY_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{COOKIE_POLICY_TEXT}
					</a>{" "}
					|{/* Legal notes link */}
					<a
						href={LEGAL_NOTES_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{LEGAL_NOTES_TEXT}
					</a>
				</p>
			</div>
		</>
	);
}

export default ContactsFooter;
