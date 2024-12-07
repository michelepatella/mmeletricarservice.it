import React from "react";
import '../../css/home/HomeHeader.css';
import { EMAIL, PHONE, FACEBOOK } from '../constants';

/**
 * Method to call when the email button is clicked
 */
function onEmailButtonClik() {
    window.location.href = `mailto:${EMAIL}`;
}

/**
 * Method to call when the facebook button is clicked
 */
function onFacebookButtonClik() {
    window.open(FACEBOOK, "_blank");
}

/**
 * Method to call when the phone button is clicked
 */
function onPhoneButtonClik() {
    window.location.href = `tel:${PHONE}`;
}

/**
 * This component contains the home header content
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {

    return (
        <>
            {/* Email Button */}
            <button className="contact-button email-button" onClick={onEmailButtonClik}>
                <img src="/icons/emailIcon.svg" alt="Email"/>
            </button>
            {/* Facebook Button */}
            <button className="contact-button facebook-button" onClick={onFacebookButtonClik}>
                <img src="/icons/facebookIcon.svg" alt="Facebook"/>
            </button>
            {/* Phone Button */}
            <button className="contact-button phone-button" onClick={onPhoneButtonClik}>
                <img src="/icons/phoneIcon.svg" alt="Phone"/>
            </button>
        </>
    );

}

export default HomeHeader;