import React from "react";
import { FOOTER_TEXT } from '../../utils/const';
import '../../../styles/components/contacts/ContactsFooter.css';

/**
 * Contacts Footer
 * @returns {Element}
 * @constructor
 */
function ContactsFooter() {
    return (
        <>

            {/* Contacts Footer global container */}
            <div className="contacts-footer">

                {/* Footer text */}
                <p className="footer-text">

                    {FOOTER_TEXT}

                    <br></br>

                    {/* Privacy policy */}
                    <a
                        href="/policies/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                        target="_blank"
                        rel="noopener noreferrer"> PRIVACY POLICY
                    </a> |

                    {/* Cookie policy */}
                    <a
                        href="/policies/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                        target="_blank"
                        rel="noopener noreferrer"> COOKIE POLICY
                    </a>

                </p>

            </div>

        </>
    );
}

export default ContactsFooter;