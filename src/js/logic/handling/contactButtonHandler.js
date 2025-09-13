import {
	EMAIL,
	EMAIL_PEC,
	FACEBOOK_LINK,
	FACEBOOK_PAGE_NAME,
	PHONE,
} from "../../utils/const";
import {
	EMAIL_ICON_LINK,
	FACEBOOK_ICON_LINK,
	PHONE_ICON_LINK,
} from "../../utils/internal_links";

/**
 * Method to call when the email button is clicked.
 */
export function onEmailButtonClick() {
	window.location.href = "mailto:" + EMAIL;
}

/**
 * Method to call when the pec email button is clicked.
 */
export function onPecButtonClick() {
	window.location.href = "mailto:" + EMAIL_PEC;
}

/**
 * Method to call when the facebook button is clicked.
 */
export function onFacebookButtonClick() {
	window.open(FACEBOOK_LINK, "_blank");
}

/**
 * Method to call when the phone button is clicked.
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
	[FACEBOOK_PAGE_NAME]: onFacebookButtonClick,
};

/**
 * Definition of the home header contact buttons.
 * @type {[
 * {onClick: onEmailButtonClick, src: string},
 * {onClick: onFacebookButtonClick, src: string},
 * {onClick: onPhoneButtonClick, src: string}
 * ]}
 */
export const homeHeaderContactButtons = [
	{
		src: EMAIL_ICON_LINK,
		onClick: onEmailButtonClick,
	},
	{
		src: FACEBOOK_ICON_LINK,
		onClick: onFacebookButtonClick,
	},
	{
		src: PHONE_ICON_LINK,
		onClick: onPhoneButtonClick,
	},
];
