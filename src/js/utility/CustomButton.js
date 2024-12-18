import '../../css/CustomButton.css';
import {Button} from "antd";
import {EMAIL, EMAIL_PEC, FACEBOOK, PHONE} from "./constants";

/**
 * Method to call when the email button is clicked
 */
function onEmailButtonClick() {
    window.location.href = `mailto:${EMAIL}`;
    console.log("ci so entrato");
}

/**
 * Method to call when the pec email button is clicked
 */
function onPecButtonClick() {
    window.location.href = `mailto:${EMAIL_PEC}`;
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
 * Method to handle when a contact button is clicked
 * @type {{[EMAIL_PEC]: onPecButtonClick, [PHONE]: onPhoneButtonClick, [EMAIL]: onEmailButtonClick, "MM Eletricar Service": onFacebookButtonClick}}
 */
const clickHandlers = {
    [PHONE]: onPhoneButtonClick,
    [EMAIL]: onEmailButtonClick,
    [EMAIL_PEC]: onPecButtonClick,
    'MM Eletricar Service': onFacebookButtonClick
};

/**
 * This component represents the contact button appears in the section contatti
 * @param title
 * @param value
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
function CustomButton({value, icon}){
    return (
        <Button type="primary" className="contact-button-contact-section" onClick={clickHandlers[value]}>
            <img src={icon}/>
            {value}</Button>
    )
}

export default CustomButton;