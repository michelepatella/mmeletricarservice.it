import {EMAIL, FACEBOOK, PHONE} from "../utils/constants";


/**
 * Method to call when the email button is clicked
 */
export const onEmailButtonClick = () => {
    window.location.href = 'mailto:' + EMAIL;
}

/**
 * Method to call when the facebook button is clicked
 */
export const onFacebookButtonClick = () => {
    window.open(FACEBOOK, "_blank");
}

/**
 * Method to call when the phone button is clicked
 */
export const onPhoneButtonClick = () => {
    window.location.href = 'tel:' + PHONE;
}