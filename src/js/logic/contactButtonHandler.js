import { EMAIL, EMAIL_PEC, FACEBOOK, PHONE } from "../utils/const";

/**
 * Method to call when the email button is clicked
 */
export function onEmailButtonClick() {
	window.location.href = "mailto:" + EMAIL;
}

/**
 * Method to call when the pec email button is clicked
 */
export function onPecButtonClick() {
	window.location.href = "mailto:" + EMAIL_PEC;
}

/**
 * Method to call when the facebook button is clicked
 */
export function onFacebookButtonClick() {
	window.open(FACEBOOK, "_blank");
}

/**
 * Method to call when the phone button is clicked
 */
export function onPhoneButtonClick() {
	window.location.href = "tel:" + PHONE;
}

/**
 * Map contact button-on click method
 * @type {{[EMAIL_PEC]: onPecButtonClick,
 * [PHONE]: onPhoneButtonClick,
 * [EMAIL]: onEmailButtonClick,
 * "MM Eletricar Service": onFacebookButtonClick}}
 */
export const contactClickHandler = {
	[PHONE]: onPhoneButtonClick,
	[EMAIL]: onEmailButtonClick,
	[EMAIL_PEC]: onPecButtonClick,
	"MM Eletricar Service": onFacebookButtonClick,
};

/**
 * Definition of the home header buttons.
 * @type {[
 * {onClick: onEmailButtonClick, src: string},
 * {onClick: onFacebookButtonClick, src: string},
 * {onClick: onPhoneButtonClick, src: string}
 * ]}
 */
export const homeHeaderButtons = [
	{
		src: "/icons/email_icon.svg",
		onClick: onEmailButtonClick,
	},
	{
		src: "/icons/facebook_icon.svg",
		onClick: onFacebookButtonClick,
	},
	{
		src: "/icons/phone_icon.svg",
		onClick: onPhoneButtonClick,
	},
];
