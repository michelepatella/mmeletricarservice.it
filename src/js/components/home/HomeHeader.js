import '../../../styles/components/home/HomeHeader.css';
import React from "react";
import {onEmailButtonClick, onFacebookButtonClick, onPhoneButtonClick} from "../../logic/homeHeaderButtonHandler";

/**
 * This component represents the footer of the "home" page
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {

    return (
        <>
            {/* Email Button */}
            <button
                className="contact-button email-button"
                onClick={onEmailButtonClick}>

            <img
                src="/icons/emailIcon.svg"
                alt="Email"/>

            </button>

            {/* Facebook Button */}
            <button
                className="contact-button facebook-button"
                onClick={onFacebookButtonClick}>

                <img
                    src="/icons/facebookIcon.svg"
                    alt="Facebook"/>

            </button>

            {/* Phone Button */}
            <button
                className="contact-button phone-button"
                onClick={onPhoneButtonClick}>

                <img
                    src="/icons/phoneIcon.svg"
                    alt="Phone"/>

            </button>
        </>
    );

}

export default HomeHeader;