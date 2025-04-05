import React from "react";
import { FOOTER_TEXT } from '../../utils/constants';
import '../../../styles/components/contatti/ContattiFooter.css';

/**
 * Contatti Footer
 * @returns {Element}
 * @constructor
 */
function ContattiFooter() {
    return (
        <>

            {/* Contatti Footer global container */}
            <div className="contatti-footer">

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

export default ContattiFooter;