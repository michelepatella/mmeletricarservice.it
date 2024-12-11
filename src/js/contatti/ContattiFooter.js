import React from "react";
import '../../css/contatti/ContattiFooter.css';
import { FOOTER_TEXT } from '../constants';


/**
 * This component contains the contatti footer
 * @returns {Element}
 * @constructor
 */
function ContattiFooter() {

    return (
        <>
            <div className="contatti-footer">
                <p className="footer-text">{FOOTER_TEXT}</p>
            </div>
        </>
    );

}

export default ContattiFooter;