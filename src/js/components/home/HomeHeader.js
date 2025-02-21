import React from "react";
import '../../../styles/components/home/HomeHeader.css';
import { EMAIL, PHONE, FACEBOOK } from '../../utility/constants';

/**
 * Method to call when the email button is clicked
 */
function onEmailButtonClick() {
    window.location.href = `mailto:${EMAIL}`;
}

/**
 * Method to call when the facebook button is clicked
 */
function onFacebookButtonClick() {
    window.open(FACEBOOK, "_blank");
}

/**
 * Method to call when the phone button is clicked
 */
function onPhoneButtonClick() {
    window.location.href = `tel:${PHONE}`;
}

/**
 * This component represents the footer of the "home" page
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {

    return (
        <>
            {/* Email Button */}
            <button className="contact-button email-button" onClick={onEmailButtonClick}>
            <img src="/icons/emailIcon.svg" alt="Email"/>
            </button>

            {/* Facebook Button */}
            <button className="contact-button facebook-button" onClick={onFacebookButtonClick}>
                <img src="/icons/facebookIcon.svg" alt="Facebook"/>
            </button>

            {/* Phone Button */}
            <button className="contact-button phone-button" onClick={onPhoneButtonClick}>
                <img src="/icons/phoneIcon.svg" alt="Phone"/>
            </button>
        </>
    );

}

export default HomeHeader;