import React from "react";
import '../../styles/contatti/ContattiFooter.css';
import { FOOTER_TEXT } from '../utility/constants';

function ContattiFooter() {
    return (
        <div className="contatti-footer">
            <p className="footer-text">
                {FOOTER_TEXT} | <a href="/doc/Privacy Policy - MM Eletricar Service.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="/doc/Cookie Policy - MM Eletricar Service.pdf" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            </p>
        </div>
    );
}

export default ContattiFooter;