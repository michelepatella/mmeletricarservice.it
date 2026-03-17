import {
	EMAIL_ICON_LINK,
	FACEBOOK_ICON_LINK,
	PHONE_ICON_LINK,
} from "../../../utils/const.js";
import {
	onEmailButtonClick,
	onFacebookButtonClick,
	onPhoneButtonClick,
} from "../../../utils/contactHandlers.js";

/*  Buttons  */
export const HOME_HEADER_CONTACT_BUTTONS = [
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
