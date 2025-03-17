import {EMAIL, EMAIL_PEC, FACEBOOK, FACEBOOK_LINK_AUTO_USATE, PHONE} from "../utils/constants";

/**
 * Method to call when the email button is clicked
 */
function onEmailButtonClick() {
    window.location.href = 'mailto:' + EMAIL;
}

/**
 * Method to call when the pec email button is clicked
 */
function onPecButtonClick() {
    window.location.href = 'mailto:' + EMAIL_PEC;
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
    window.location.href = 'tel:'+ PHONE;
}

/**
 * Method to handle when a contact button is clicked
 * @type {{[EMAIL_PEC]: onPecButtonClick, [PHONE]: onPhoneButtonClick, [EMAIL]: onEmailButtonClick, "MM Eletricar Service": onFacebookButtonClick}}
 */
export const clickHandlers = {
    [PHONE]: onPhoneButtonClick,
    [EMAIL]: onEmailButtonClick,
    [EMAIL_PEC]: onPecButtonClick,
    'MM Eletricar Service': onFacebookButtonClick,
    [FACEBOOK_LINK_AUTO_USATE]: onFacebookButtonClick
};