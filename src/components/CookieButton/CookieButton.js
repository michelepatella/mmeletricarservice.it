import React from "react";
import { Button } from "antd";
import {
	COOKIE_BUTTON_ARIA_LABEL,
	COOKIE_BUTTON_CLASS_NAME,
} from "../../utils/const/components/cookieConst";
import { handleCookieButtonClick } from "../../logic/cookieButtonHandler";

/**
 * This component defines the cookie button displayed
 * in the application. Clicking through the user can manage
 * its cookie preferences via cookie consent banner open
 * as soon as cookie button is clicked.
 * @param setIsCookiesBannerVisible
 * @returns {Element}
 * @constructor
 */
function CookieButton({ setIsCookiesBannerVisible }) {
	return (
		<Button
			className={COOKIE_BUTTON_CLASS_NAME}
			aria-label={COOKIE_BUTTON_ARIA_LABEL}
			onClick={() =>
				handleCookieButtonClick(setIsCookiesBannerVisible)
			}
		/>
	);
}

export default CookieButton;
