/**
 * Method to call when the pec email button is clicked.
 * @param emailPec
 */
export function onPecButtonClick(emailPec) {
	window.location.href = "mailto:" + emailPec;
}

/**
 * Method to call when the facebook button is clicked.
 * @param facebookLink
 */
export function onFacebookButtonClick(facebookLink) {
	window.open(facebookLink, "_blank");
}

/**
 * Method to call when the phone button is clicked.
 * @param phone
 */
export function onPhoneButtonClick(phone) {
	window.location.href = "tel:" + phone;
}

/**
 * Method to call when the email button is clicked.
 * @param email
 */
export function onEmailButtonClick(email) {
	window.location.href = "mailto:" + email;
}
