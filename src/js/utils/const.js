import {
	EMAIL_ICON_LINK,
	FACEBOOK_ICON_LINK,
	PHONE_ICON_LINK,
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
	"<strong>Competenza. Qualità. Innovazione.</strong>";

/**------------- "About us" text -------------**/
export const ABOUT_US_TITLE = "Chi siamo.";
export const ABOUT_US_DESCRIPTION =
	"Siamo Michele Vacca e Michele Scalese, fondatori di <strong>MM Eletricar Service</strong>, officina elettrauto a Gravina in Puglia (BA). " +
	"Un progetto che unisce esperienza e passione per l’elettronica d’auto. <br></br>" +
	"Ogni giorno ci impegniamo ad offrire competenza, trasparenza ed affidabilità a chi ama la propria auto " +
	"e vuole affidarsi ad un elettrauto di fiducia a Gravina in Puglia (BA).";

/**------------- "Our values" texts -------------**/
export const OUR_VALUES_TITLE = "I nostri valori.";
export const OUR_VALUES_STEPS = [
	{
		title: "Cura dell'auto",
		description:
			"Ogni auto merita attenzione, perchè sappiamo quanto sia importante per i nostri clienti.",
	},
	{
		title: "Impegno",
		description:
			"Ci impegniamo a soddisfare ogni esigenza e superare le aspettative.",
	},
	{
		title: "Fiducia",
		description:
			"Agiamo con trasparenza e serietà, costruendo relazioni solide.",
	},
];

/**------------- "Services" texts -------------**/
export const SERVICES_TITLE = [
	{
		text: "Prestazioni.",
		gradient: "--red_gradient_color",
	},
	{
		text: "Sicurezza.",
		gradient: "var(--blue_gradient_color)",
	},
	{
		text: "Affidabilità.",
		gradient: "--green_gradient_color",
	},
];
const servicesData = [
	[
		"Manutenzione centralina",
		"Controllo ed aggiornamento della centralina elettronica per un funzionamento ottimale del veicolo.",
		"/icons/cpu_icon.svg",
	],
	[
		"Riparazione parabrezza",
		"Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.",
		"/icons/wrench_icon.svg",
	],
	[
		"Pannello di controllo",
		"Riparazione e calibrazione di strumenti digitali ed analogici del cruscotto.",
		"/icons/control_panel_icon.svg",
	],
	[
		"Riparazione conta km",
		"Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.",
		"/icons/dashboard_icon.svg",
	],
	[
		"Ripristino EGR e DPF",
		"Pulizia o sostituzione di valvola EGR e filtro antiparticolato per ridurre emissioni e consumi.",
		"/icons/filter_icon.svg",
	],
	[
		"Ricarica aria condizionata",
		"Ripristino del gas refrigerante per garantire un climatizzatore efficiente ed aria fresca.",
		"/icons/air_icon.svg",
	],
	[
		"Diagnosi iniezione",
		"Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.",
		"/icons/engine_icon.svg",
	],
	[
		"Duplicazione chiavi e telecomandi",
		"Realizzazione di copie di chiavi e telecomandi per ogni tipo di veicolo.",
		"/icons/key_icon.svg",
	],
	[
		"Diagnosi elettronica",
		"Individuazione e risoluzione di guasti elettronici per un'analisi precisa del tuo veicolo.",
		"/icons/diagnosis_icon.svg",
	],
	[
		"Veicoli ibridi ed elettrici",
		"Manutenzione specializzata per veicoli ibridi ed elettrici.",
		"/icons/electric_icon.svg",
	],
	[
		"Installazione antifurti",
		"Soluzioni antifurto satellitari Igla e meccanici Defender per la protezione del tuo veicolo.",
		"/icons/anti_theft_icon.svg",
	],
];

export const ALL_SERVICES = servicesData.map(
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
		icon: "/icons/calendar_icon.svg",
	},
	{
		title: "Chilometraggio (km)",
		name: "mileage",
		icon: "/icons/road_icon.svg",
	},
	{
		title: "Carburante",
		name: "fuel",
		icon: "/icons/fuel_icon.svg",
	},
	{
		title: "Stato",
		name: "status",
		icon: "/icons/car_icon.svg",
	},
];
export const USED_CAR_ALL_INFO = [
	{
		key: "1",
		label: "Motore e prestazioni",
		children: [
			{
				title: "<strong>Potenza (CV)</strong>",
				name: "power",
			},
			{
				title: "<strong>Cilindrata (cc)</strong>",
				name: "engine_displacement",
			},
			{
				title: "<strong>Cilindri</strong>",
				name: "cylinders",
			},
			{
				title: "<strong>Cambio</strong>",
				name: "transmission",
			},
		],
	},
	{
		key: "2",
		label: "Emissioni e consumo",
		children: [
			{
				title: "<strong>Consumo (L/100 km)</strong>",
				name: "consumption",
			},
			{
				title: "<strong>Emissioni (g/km)</strong>",
				name: "emissions",
			},
			{
				title: "<strong>Classe emissioni</strong>",
				name: "emission_class",
			},
		],
	},
	{
		key: "3",
		label: "Esterno",
		children: [
			{
				title: "<strong>Porte</strong>",
				name: "doors",
			},
			{
				title: "<strong>Colore esterno</strong>",
				name: "external_color",
			},
			{
				title: "<strong>Carrozzeria</strong>",
				name: "bodywork",
			},
		],
	},
	{
		key: "4",
		label: "Interno e comfort",
		children: [
			{
				title: "<strong>Posti</strong>",
				name: "seats",
			},
			{
				title: "<strong>Colore interno</strong>",
				name: "internal_color",
			},
			{
				title: "<strong>Materiale interno</strong>",
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
export const WHERE_WE_ARE_TITLE = "Dove siamo.";
export const GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION =
	"Accetta i cookie di terze parti per visualizzare la nostra posizione sulla mappa.";
export const GOOGLE_MAPS_LINK =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit";

/**------------- "Contacts" texts -------------**/
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
