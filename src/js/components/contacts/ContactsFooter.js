import { CONTACT_FOOTER_TEXT } from "../../utils/const";

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
						href="/docs/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						PRIVACY POLICY
					</a>{" "}

					|{/* Cookie policy link */}
					<a
						href="/docs/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						COOKIE POLICY
					</a>{" "}

					|{/* Legal notes link */}
					<a
						href="/docs/Note%20Legali%20-%20Auto%20Usate%20-%20MM%20Eletricar%20Service.pdf"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						NOTE LEGALI
					</a>

				</p>

			</div>
		</>
	);
}

export default ContactsFooter;
