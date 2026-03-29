import {
	EMAIL_ICON_LINK,
	FACEBOOK_ICON_LINK,
	PHONE_ICON_LINK,
	EMAIL,
	FACEBOOK_LINK,
	PHONE,
} from "../../../utils/const.js";
import {
	onEmailButtonClick,
	onFacebookButtonClick,
	onPhoneButtonClick,
} from "../../../utils/contact-handlers.js";

/*  Buttons  */
export const HOME_HEADER_CONTACT_BUTTONS = [
	{
		src: EMAIL_ICON_LINK,
		onClick: () => onEmailButtonClick(EMAIL),
	},
	{
		src: FACEBOOK_ICON_LINK,
		onClick: () => onFacebookButtonClick(FACEBOOK_LINK),
	},
	{
		src: PHONE_ICON_LINK,
		onClick: () => onPhoneButtonClick(PHONE),
	},
];
