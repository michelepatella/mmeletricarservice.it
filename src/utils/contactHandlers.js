import { Sentry } from "../index";

/**
 * Method to call when the pec email button is clicked.
 * @param emailPec — PEC address to which the email will be sent
 */
export function onPecButtonClick(emailPec) {
	try {
		/* eslint-disable-next-line no-undef */
		globalThis.location.href = "mailto:" + emailPec;
	} catch (error) {
		Sentry.logger.error(error, {
			context: "PEC button click",
			pec: emailPec,
		});
	}
}

/**
 * Method to call when the facebook button is clicked.
 * @param facebookLink — Facebook link to be open
 */
export function onFacebookButtonClick(facebookLink) {
	try {
		window.open(facebookLink, "_blank");
	} catch (error) {
		Sentry.logger.error(error, {
			context: "Facebook button click",
			facebookLink: facebookLink,
		});
	}
}

/**
 * Method to call when the phone button is clicked.
 * @param phone — Phone number to be called
 */
export function onPhoneButtonClick(phone) {
	try {
		/* eslint-disable-next-line no-undef */
		globalThis.location.href = "tel:" + phone;
	} catch (error) {
		Sentry.logger.error(error, {
			context: "Phone button click",
			phone: phone,
		});
	}
}

/**
 * Method to call when the email button is clicked.
 * @param email — Email address to which the email will be sent
 */
export function onEmailButtonClick(email) {
	try {
		/* eslint-disable-next-line no-undef */
		globalThis.location.href = "mailto:" + email;
	} catch (error) {
		Sentry.logger.error(error, {
			context: "Email button click",
			email: email,
		});
	}
}
