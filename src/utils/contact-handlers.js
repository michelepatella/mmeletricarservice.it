import { SentryReact } from "../index.js";

/**
 * Method to call when the pec email button is clicked.
 * @param emailPec — PEC address to which the email will be sent
 */
export function onPecButtonClick(emailPec) {
	/* eslint-disable-next-line no-undef */
	globalThis.location.href = "mailto:" + emailPec;
	SentryReact.logger.info("PEC button clicked", {
		pec: emailPec,
	});
}

/**
 * Method to call when the facebook button is clicked.
 * @param facebookLink — Facebook link to be open
 */
export function onFacebookButtonClick(facebookLink) {
	window.open(facebookLink, "_blank");
	SentryReact.logger.info("Facebook button clicked", {
		facebookLink: facebookLink,
	});
}

/**
 * Method to call when the phone button is clicked.
 * @param phone — Phone number to be called
 */
export function onPhoneButtonClick(phone) {
	/* eslint-disable-next-line no-undef */
	globalThis.location.href = "tel:" + phone;
	SentryReact.logger.info("Phone button clicked", {
		phone: phone,
	});
}

/**
 * Method to call when the email button is clicked.
 * @param email — Email address to which the email will be sent
 */
export function onEmailButtonClick(email) {
	/* eslint-disable-next-line no-undef */
	globalThis.location.href = "mailto:" + email;
	SentryReact.logger.info("Email button clicked", {
		email: email,
	});
}
