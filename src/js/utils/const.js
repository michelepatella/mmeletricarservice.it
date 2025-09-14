import {
	AIR_ICON_LINK,
	ANTI_THEFT_ICON_LINK,
	CALENDAR_ICON_LINK,
	CAR_ICON_LINK,
	CONTROL_PANEL_ICON_LINK,
	CPU_ICON_LINK,
	DASHBOARD_ICON_LINK,
	DIAGNOSIS_ICON_LINK,
	ELECTRIC_ICON_LINK,
	EMAIL_ICON_LINK,
	ENGINE_ICON_LINK,
	FACEBOOK_ICON_LINK,
	FILTER_ICON_LINK,
	FUEL_ICON_LINK,
	KEY_ICON_LINK,
	PHONE_ICON_LINK,
	ROAD_ICON_LINK,
	WRENCH_ICON_LINK,
} from "./internal_links";

/**------------- Data -------------**/
export const STALE_TIME = 1000 * 60 * 5;

/**------------- Contacts information -------------**/
export const EMAIL = "mmeletricarservice@libero.it";
export const EMAIL_PEC =
	"mmeletricarservice@pec.buffetti.it";
export const FACEBOOK_PAGE_NAME = "MM Eletricar Service";
export const FACEBOOK_LINK =
	"https://www.facebook.com/profile.php?id=61573235319851&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true";
export const PHONE = "0803267837";
export const P_IVA = "08650830725";
export const RAG_SOCIALE =
	"Mm Eletricar Service Di Vacca Michele & Scalese Michele Società N Nome Collettivo";
export const SITE =
	"Via G. Bizet, 63 — Gravina in Puglia (BA), 70024, Italia";
export const REA = "640711";

/**------------- Cookies -------------**/
export const COOKIE_EXPIRATION_DATE = 30;
export const COOKIE_NAME = "cookieConsent";
export const COOKIE_CONSENT_BANNER_VISIBLE = true;
export const COOKIE_CONSENT_BANNER_LOCATION = "bottom";
export const COOKIE_CONSENT_BANNER_ENABLE_DECLINE_BUTTON = true;
export const COOKIE_CONSENT_BANNER_DESCRIPTION =
	'Questo sito utilizza i cookie. Cliccando su "Accetta", acconsenti all\'uso dei cookie. Cliccando su "Rifiuta", rifiuti l\'uso dei cookie. Per maggiori informazioni consulta la nostra ';
export const COOKIE_ACCEPT_BUTTON_TEXT =
	"Accetta cookie di terze parti";
export const COOKIE_DECLINE_BUTTON_TEXT =
	"Rifiuta cookie di terze parti";
export const COOKIE_BUTTON_ARIA_LABEL = "Gestisci cookies";

/**------------- Menu -------------**/
export const SECTIONS = [
	{
		id: "home",
		title: "Home",
	},
	{
		id: "chi-siamo",
		title: "Chi siamo",
	},
	{
		id: "i-nostri-valori",
		title: "I nostri valori",
	},
	{
		id: "servizi",
		title: "Servizi",
	},
	{
		id: "auto-usate",
		title: "Auto usate",
	},
	{
		id: "dove-siamo",
		title: "Dove siamo",
	},
	{
		id: "contatti",
		title: "Contatti",
	},
];
export const MENU_ARIA_LABEL = "Menu";

/**------------- "Home" texts -------------**/
export const HOME_TITLE = "MM Eletricar Service.";
export const HOME_SUBTITLE =
	"Passione. Competenza. Qualità.";

/**------------- "About us" text -------------**/
export const ABOUT_US_TITLE = "Chi siamo.";
export const ABOUT_US_DESCRIPTION =
	"Siamo Michele Vacca e Michele Scalese, fondatori di <strong>MM Eletricar Service</strong>, officina elettrauto a Gravina in Puglia (BA)." +
	" Un progetto nato dalla passione per l’elettronica d’auto e dall’esperienza nel settore. <br></br>" +
	"Ogni giorno ci dedichiamo ad offrire servizi professionali, trasparenti ed affidabili a chi ama la propria auto e cerca un elettrauto di fiducia a Gravina in Puglia (BA).";

/**------------- "Our values" texts -------------**/
export const OUR_VALUES_TITLE = "Ciò in cui crediamo.";
export const OUR_VALUES_STEPS = [
	{
		title: "Impegno",
		description:
			"Ci dedichiamo a soddisfare ogni esigenza, andando oltre le aspettative.",
	},
	{
		title: "Eccellenza",
		description:
			"Garantiamo risultati di alta qualità in ogni intervento, con passione e competenza.",
	},
	{
		title: "Fiducia",
		description:
			"Agiamo con trasparenza e serietà, costruendo relazioni solide e durature.",
	},
];

/**------------- "Services" texts -------------**/
export const SERVICES_TITLE = [
	{
		text: "Prestazioni.",
		gradient: "var(--red_color_with_gradient)",
	},
	{
		text: "Sicurezza.",
		gradient: "var(--blue_color_with_gradient)",
	},
	{
		text: "Affidabilità.",
		gradient: "var(--green_color_with_gradient)",
	},
];
const ALL_SERVICES_DATA = [
	[
		"Manutenzione Centralina",
		"Controllo ed aggiornamento della centralina elettronica per garantire il corretto funzionamento del veicolo.",
		CPU_ICON_LINK,
	],
	[
		"Diagnosi Elettronica",
		"Individuazione e risoluzione di guasti elettronici per un’analisi precisa del veicolo.",
		DIAGNOSIS_ICON_LINK,
	],
	[
		"Diagnosi Iniezione",
		"Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.",
		ENGINE_ICON_LINK,
	],
	[
		"Ripristino EGR e DPF",
		"Pulizia o sostituzione della valvola EGR e del filtro antiparticolato per ridurre emissioni e consumi.",
		FILTER_ICON_LINK,
	],
	[
		"Riparazione Contachilometri",
		"Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.",
		DASHBOARD_ICON_LINK,
	],
	[
		"Pannello di Controllo",
		"Riparazione e calibrazione degli strumenti digitali e analogici del cruscotto.",
		CONTROL_PANEL_ICON_LINK,
	],
	[
		"Ricarica Aria Condizionata",
		"Ripristino del gas refrigerante per garantire un climatizzatore efficiente ed aria fresca.",
		AIR_ICON_LINK,
	],
	[
		"Riparazione Parabrezza",
		"Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.",
		WRENCH_ICON_LINK,
	],
	[
		"Duplicazione Chiavi e Telecomandi",
		"Realizzazione di copie di chiavi e telecomandi per tutti i tipi di veicolo.",
		KEY_ICON_LINK,
	],
	[
		"Installazione Antifurti",
		"Soluzioni antifurto satellitari Igla e meccanici Defender per proteggere il veicolo.",
		ANTI_THEFT_ICON_LINK,
	],
	[
		"Manutenzione Veicoli Ibridi ed Elettrici",
		"Servizi specializzati per la manutenzione di veicoli ibridi ed elettrici.",
		ELECTRIC_ICON_LINK,
	],
];
export const ALL_SERVICES = ALL_SERVICES_DATA.map(
	([title, description, icon]) => ({
		title,
		description,
		icon,
	})
);

/**------------- "Used cars" texts -------------**/
export const USED_CARS_TITLE =
	"Il nostro store di auto usate.";
export const USED_CAR_OVERVIEW = [
	{
		title: "Anno",
		name: "year",
		icon: CALENDAR_ICON_LINK,
	},
	{
		title: "Chilometraggio (km)",
		name: "mileage",
		icon: ROAD_ICON_LINK,
	},
	{
		title: "Carburante",
		name: "fuel",
		icon: FUEL_ICON_LINK,
	},
	{
		title: "Stato",
		name: "status",
		icon: CAR_ICON_LINK,
	},
];
export const USED_CAR_ALL_INFO = [
	{
		key: "1",
		label: "Motore e prestazioni",
		children: [
			{
				title: "Potenza (CV)",
				name: "power",
			},
			{
				title: "Cilindrata (cc)",
				name: "engine_displacement",
			},
			{
				title: "Cilindri",
				name: "cylinders",
			},
			{
				title: "Cambio",
				name: "transmission",
			},
		],
	},
	{
		key: "2",
		label: "Emissioni e consumo",
		children: [
			{
				title: "Consumo (L/100 km)",
				name: "consumption",
			},
			{
				title: "Emissioni (g/km)",
				name: "emissions",
			},
			{
				title: "Classe emissioni",
				name: "emission_class",
			},
		],
	},
	{
		key: "3",
		label: "Esterno",
		children: [
			{
				title: "Porte",
				name: "doors",
			},
			{
				title: "Colore esterno",
				name: "external_color",
			},
			{
				title: "Carrozzeria",
				name: "bodywork",
			},
		],
	},
	{
		key: "4",
		label: "Interno e comfort",
		children: [
			{
				title: "Posti",
				name: "seats",
			},
			{
				title: "Colore interno",
				name: "internal_color",
			},
			{
				title: "Materiale interno",
				name: "internal_material",
			},
		],
	},
];
export const USED_CAR_SCROLL_LABEL_TEXT =
	"< Scorri per esplorare >";
export const USED_CARS_UNAVAILABLE_DESCRIPTION =
	"Auto momentaneamente esaurite. Stiamo preparando nuovi arrivi!";
export const USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION =
	"Anteprima non disponibile.";
export const CTA_BUTTON_TEXT = "Verifica disponibilità";
export const BACK_BUTTON_LABEL = "Indietro";

/**------------- "Where we are" texts -------------**/
export const WHERE_WE_ARE_TITLE = "Dove trovarci.";
export const WORKING_HOURS_TITLE = "Orari d'apertura.";
export const WORKING_HOURS_DESCRIPTION =
	"- <strong>Lun-Ven</strong>: 08:30-13:00 / 15:00-19:00 <br>" +
	"- <strong>Sab</strong>: 08:30-13:00";
export const GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION =
	"Accetta i cookie di terze parti per visualizzare la nostra posizione sulla mappa.";
export const GOOGLE_MAPS_LINK =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit";

/**------------- "Contacts" texts -------------**/
export const CONTACTS_SECTION_ID = "contatti";
export const CONTACTS_SECTION_TITLE_TYPE = "super-heading";
export const CONTACTS_SECTION_TITLE_DISABLE_ANIMATION = true;
export const CONTACTS_BUTTONS_CONTAINER_CLASS_NAME = "contact-buttons-container";
export const CONTACTS_BUTTONS_IS_CONTACT = true;
export const CONTACTS_BUTTONS_IS_CTA	= false;
export const CONTACTS_FOOTER_CLASS_NAME = "contacts-footer";
export const CONTACTS_FOOTER_TEXT_CLASS_NAME = "contacts-footer-text";
export const CONTACTS_TITLE = "Siamo qui per te.";
export const CONTACTS = [
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
export const CONTACT_FOOTER_TEXT =
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
