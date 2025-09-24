import React from "react";
import { Button } from "antd";
import {
	COOKIE_BUTTON_ARIA_LABEL,
	COOKIE_BUTTON_CLASS_NAME,
} from "./const.js";
import { onCookieButtonClick } from "./handler.js";

/**
 * This component defines the cookie button displayed
 * in the application. Clicking through the user can manage
 * its cookie preferences via cookie consent banner open
 * as soon as cookie button is clicked.
 * @param setIsCookiesBannerVisible — Setter for cookie consent
 * banner visibility.
 * @returns {Element} — The cookie button component.
 */
function CookieButton({ setIsCookiesBannerVisible }) {
	return (
		<Button
			className={COOKIE_BUTTON_CLASS_NAME}
			aria-label={COOKIE_BUTTON_ARIA_LABEL}
			onClick={() =>
				onCookieButtonClick(setIsCookiesBannerVisible)
			}
		/>
	);
}

export default CookieButton;
