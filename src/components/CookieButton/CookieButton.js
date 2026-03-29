import React from "react";
import { Button } from "antd";
import {
	COOKIE_BUTTON_ARIA_LABEL,
	COOKIE_BUTTON_CLASS_NAME,
} from "./const.js";
import { onCookieButtonClick } from "./handler/handler.js";

/**
 * This component defines the cookie button. Clicking through it,
 * the user can manage his/her cookie preferences.
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
