import React from "react";
import { onEmailButtonClick, onFacebookButtonClick, onPhoneButtonClick } from "../../logic/contactButtonHandler";
import CustomIconButton from "../custom/CustomIconButton";
import '../../../styles/components/home/HomeHeader.css';

/**
 * Header of "Home" section
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {
    return (

        <>
            {/* Email Button */}
            <CustomIconButton
                src="/icons/emailIcon.svg"
                alt="Email"
                onClick={onEmailButtonClick}/>

            {/* Facebook Button */}
            <CustomIconButton
                src="/icons/facebookIcon.svg"
                alt="Facebook"
                onClick={onFacebookButtonClick}/>

            {/* Phone Button */}
            <CustomIconButton
                src="/icons/phoneIcon.svg"
                alt="Phone"
                onClick={onPhoneButtonClick}/>
        </>

    );
}

export default HomeHeader;