import {
	onEmailButtonClick,
	onFacebookButtonClick,
	onPecButtonClick,
	onPhoneButtonClick,
} from "./contactHandlers.js";

/**------------- Shared across the app -------------**/

/* — Company Information — */
export const SITE =
	"Via G. Bizet, 63 — Gravina in Puglia (BA), 70024, Italia";
export const PHONE = "0803267837";
export const EMAIL = "mmeletricarservice@libero.it";
export const EMAIL_PEC =
	"mmeletricarservice@pec.buffetti.it";
export const FACEBOOK_PAGE_NAME = "MM Eletricar Service";
export const FACEBOOK_LINK =
	"https://www.facebook.com/profile.php?id=61573235319851&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true";
export const RAG_SOCIALE =
	"Mm Eletricar Service Di Vacca Michele & Scalese Michele Società N Nome Collettivo";
export const P_IVA = "08650830725";
export const REA = "640711";

/* — Icons — */
export const EMAIL_ICON_LINK = "/icons/email-icon.svg";
export const FACEBOOK_ICON_LINK =
	"/icons/facebook-icon.svg";
export const PHONE_ICON_LINK = "/icons/phone-icon.svg";

/* — Company Contacts — */
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
export const CONTACTS_CLICK_HANDLERS = {
	[PHONE]: () => onPhoneButtonClick(PHONE),
	[EMAIL]: () => onEmailButtonClick(EMAIL),
	[EMAIL_PEC]: () => onPecButtonClick(EMAIL_PEC),
	[FACEBOOK_PAGE_NAME]: () =>
		onFacebookButtonClick(FACEBOOK_LINK),
};

/* — Policies — */
export const PRIVACY_POLICY_TEXT = "PRIVACY POLICY";
export const COOKIE_POLICY_TEXT = "COOKIE POLICY";
export const PRIVACY_POLICY_LINK =
	"/docs/Privacy%20Policy%20-%20MM%20Eletricar%20Service.pdf";
export const COOKIE_POLICY_LINK =
	"/docs/Cookie%20Policy%20-%20MM%20Eletricar%20Service.pdf";

/* — Sections — */
export const HOME_SECTION_NAME = "Home";
export const HOME_SECTION_ID = "home";
export const ABOUT_US_SECTION_NAME = "Chi siamo";
export const ABOUT_US_SECTION_ID = "chi-siamo";
export const OUR_VALUES_SECTION_NAME = "I nostri valori";
export const OUR_VALUES_SECTION_ID = "i-nostri-valori";
export const SERVICES_SECTION_NAME = "Servizi";
export const SERVICES_SECTION_ID = "servizi";
export const USED_CARS_SECTION_NAME = "Auto usate";
export const USED_CARS_SECTION_ID = "auto-usate";
export const WHERE_WE_ARE_SECTION_NAME = "Dove siamo";
export const WHERE_WE_ARE_SECTION_ID = "dove-siamo";
export const CONTACTS_SECTION_NAME = "Contatti";
export const CONTACTS_SECTION_ID = "contatti";

/* — Text — */
export const CUSTOM_TEXT_TYPES = {
	SUPER_HEADING: "super-heading",
	HEADING: "heading",
	SUBHEADING: "subheading",
	BODY: "body",
	CAPTION: "caption",
};

/* — Data — */
export const API_FOLDER_PATH = "/api/";
export const USED_CARS_OVERVIEW_ENDPOINT =
	"used-cars-overview/usedCarsOverview";
export const USED_CAR_INFO_ENDPOINT =
	"used-car-info/usedCarInfo";

/* — Cookie — */
export const COOKIE_NAME = "cookieConsent";

/* — Images — */
export const DOTTED_BACKGROUND_IMAGE_LINK =
	"/images/dot.avif";
