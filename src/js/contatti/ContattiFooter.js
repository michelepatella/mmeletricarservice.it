import React from "react";
import '../../css/contatti/ContattiFooter.css';
import { FOOTER_TEXT } from '../utility/constants';


/**
 * This component contains the contatti footer
 * @returns {Element}
 * @constructor
 */
function ContattiFooter() {

    return (
        <>
            <div className="contatti-footer">
                <p className="footer-text">{FOOTER_TEXT} | <a href="/privacy-policy">Privacy Policy</a> | <a href="/cookie-policy">Cookie Policy</a></p>
            </div>
        </>
    );

}

export default ContattiFooter;