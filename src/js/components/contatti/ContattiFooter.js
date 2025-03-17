import React from "react";
import '../../../styles/components/contatti/ContattiFooter.css';
import { FOOTER_TEXT } from '../../utils/constants';

/**
 * This component represents the footer of the "contatti" page
 * @returns {Element}
 * @constructor
 */
function ContattiFooter() {
    return (
        <>
            {/* Global container */}
            <div className="contatti-footer">

                {/* Footer text (copyright, P.IVA and policies) */}
                <p className="footer-text">

                    {FOOTER_TEXT} |

                    <a
                        href="/policies/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Privacy Policy
                    </a> |

                    <a
                        href="/policies/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Cookie Policy
                    </a>

                </p>

            </div>
        </>
    );
}

export default ContattiFooter;