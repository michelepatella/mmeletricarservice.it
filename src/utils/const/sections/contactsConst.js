import {
	EMAIL_ICON_LINK,
	FACEBOOK_ICON_LINK,
	PHONE_ICON_LINK,
} from "../../internalLinks";
import {
	EMAIL,
	EMAIL_PEC,
	FACEBOOK_PAGE_NAME,
	P_IVA,
	PHONE,
	RAG_SOCIALE,
	REA,
	SITE,
} from "../other/companyConst";

/**------------- Contacts General constants -------------**/
export const CONTACTS_SECTION_NAME = "Contatti";
export const CONTACTS_SECTION_ID = "contatti";

/**------------- Contacts Layout constants -------------**/
export const CONTACTS_LAYOUT_CLASS_NAME = "contacts-layout";
export const CONTACTS_CONTENT_CLASS_NAME =
	"contacts-content";
export const CONTACTS_FOOTER_CLASS_NAME = "contacts-footer";

/**------------- Contacts Title constant -------------**/
export const CONTACTS_TITLE = "Siamo qui per te.";

/**------------- Contact Buttons constant -------------**/
export const ALL_CONTACTS = [
	{
		value: PHONE,
		icon: PHONE_ICON_LINK,
	},
	{
		value: EMAIL,
		icon: EMAIL_ICON_LINK,
	},
	{
		value: EMAIL_PEC,
		icon: EMAIL_ICON_LINK,
	},
	{
		value: FACEBOOK_PAGE_NAME,
		icon: FACEBOOK_ICON_LINK,
	},
];
export const CONTACTS_BUTTONS_CONTAINER_CLASS_NAME =
	"contact-buttons-container";

/**------------- Contacts Footer constant -------------**/
export const CONTACTS_FOOTER_TEXT_CLASS_NAME =
	"contacts-footer-text";
export const CONTACTS_FOOTER_TEXT =
	RAG_SOCIALE +
	". " +
	SITE +
	". P. IVA: " +
	P_IVA +
	". REA: " +
	REA +
	".";
export const PRIVACY_POLICY_TEXT = "PRIVACY POLICY";
export const COOKIE_POLICY_TEXT = "COOKIE POLICY";
export const LEGAL_NOTES_TEXT = "NOTE LEGALI";
