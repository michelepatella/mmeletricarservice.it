import { CONTACT_FOOTER_TEXT } from "../../utils/const";

/**
 * Contact Footer
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
          {/* Privacy policy */}
          <a
            href="/doc/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            PRIVACY POLICY
          </a>{" "}
          |{/* Cookie policy */}
          <a
            href="/doc/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            COOKIE POLICY
          </a>{" "}
          |{/* Legal notes */}
          <a
            href="/doc/Note%20Legali%20-%20Auto%20Usate%20-%20MM%20Eletricar%20Service.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            NOTE LEGALI
          </a>
        </p>
      </div>
    </>
  );
}

export default ContactsFooter;
