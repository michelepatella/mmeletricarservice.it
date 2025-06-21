/**------------- contacts information -------------**/
export const EMAIL = "mmeletricarservice@libero.it";
export const EMAIL_PEC = "mmeletricarservice@pec.buffetti.it";
export const FACEBOOK =
	"https://www.facebook.com/profile.php?id=61573235319851&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true";
export const PHONE = "0803267837";
export const P_IVA = "08650830725";
export const RAG_SOCIALE =
	"Mm Eletricar Service Di Vacca Michele & Scalese Michele Società N Nome Collettivo";
export const SITE = "Via G. Bizet 63, 70024 Gravina in Puglia (BA), Italia";
export const REA = "640711";

/**------------- cookies -------------**/
export const COOKIE_CONSENT_BANNER_DESCRIPTION =
	'Questo sito utilizza i cookie. Cliccando su "Accetta", acconsenti all\'uso dei cookie. Cliccando su "Rifiuta", rifiuti l\'uso dei cookie. Per maggiori informazioni consulta la nostra ';
export const COOKIE_ACCEPT_BUTTON_TEXT = "Accetta cookie di terze parti";
export const COOKIE_DECLINE_BUTTON_TEXT = "Rifiuta cookie di terze parti";
export const COOKIE_EXPIRATION_DATE = 30;

/**------------- sections definition -------------**/
export const SECTIONS = [
	{
		id: "home",
		title: "Home",
	},
	{
		id: "chi-siamo",
		title: "Chi siamo",
		children: [
			{
				id: "i-nostri-valori",
				title: "I nostri valori",
			},
		],
	},
	{
		id: "servizi",
		title: "Servizi",
		children: [
			{
				id: "tutti-i-servizi",
				title: "Tutti i servizi",
			},
			{
				id: "auto-usate",
				title: "Auto usate",
			},
		],
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

/**------------- "Home" texts -------------**/
export const HOME_TITLE = "Dove la tua auto <br> trova l'eccellenza";
export const HOME_SUBTITLE =
	"Benvenuto nell'autofficina <br> <strong>MM Eletricar Service</strong>!";

/**------------- "About us" text -------------**/
export const ABOUT_US_TITLE = "Professionisti del settore";
export const ABOUT_US_SUBTITLE =
	"Un progetto che nasce dall'unione di esperienza e passione.";
export const ABOUT_US_DESCRIPTION =
	"Siamo Michele Vacca e Michele Scalese, fondatori di <strong>MM Eletricar Service</strong>, un'officina elettrauto a Gravina in Puglia (BA). " +
	"Un progetto nato dall'incontro tra anni d'esperienza nel settore ed una passione autentica verso l'elettronica d'auto e l'innovazione. <br></br>" +
	"Ogni giorno ci impegniamo ad offrire competenza, trasparenza ed affidabilità a chi ama la propria auto " +
	"e vuole affidarsi ad un elettrauto professionale a Gravina in Puglia (BA).";

/**------------- "Our values" texts -------------**/
export const OUR_VALUES_TITLE = "I valori chiave";
export const OUR_VALUES_SUBTITLE =
	"Ciò che guida il nostro lavoro e ci contraddistingue.";
export const OUR_VALUES_DESCRIPTION =
	"In <strong>MM Eletricar Service</strong> crediamo che ogni veicolo meriti attenzione e cura, " +
	"poiché comprendiamo quanto sia importante per i nostri clienti. " +
	"<br></br>La nostra <strong>missione</strong> è costruire relazioni di fiducia con i nostri clienti, fornendo soluzioni su misura, " +
	"affidabili e di qualità, per garantire la completa soddisfazione di chi si affida alla " +
	"nostra officina elettrauto per manutenzione, riparazione e diagnostica elettronica d'auto.";

/**------------- "Services" texts -------------**/
export const SERVICES_TITLE = "Eccellenza in ogni servizio";
export const SERVICES_SUBTITLE =
	"Manutenzioni, riparazioni e diagnosi elettroniche: solo il meglio per la tua auto.";

/**------------- "All services" texts -------------**/
export const ALL_SERVICES = [
	{
		title: "Manutenzione centralina",
		description:
			"Controllo ed aggiornamento della centralina elettronica per un funzionamento ottimale del veicolo.",
		icon: "/icons/cpu_icon.svg",
	},
	{
		title: "Riparazione parabrezza",
		description:
			"Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.",
		icon: "/icons/wrench_icon.svg",
	},
	{
		title: "Pannello di controllo",
		description:
			"Riparazione e calibrazione di strumenti digitali ed analogici del cruscotto.",
		icon: "/icons/control_panel_icon.svg",
	},
	{
		title: "Riparazione conta km",
		description:
			"Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.",
		icon: "/icons/dashboard_icon.svg",
	},
	{
		title: "Ripristino EGR e DPF",
		description:
			"Pulizia o sostituzione di valvola EGR e filtro antiparticolato per ridurre emissioni e consumi.",
		icon: "/icons/filter_icon.svg",
	},
	{
		title: "Ricarica aria condizionata",
		description:
			"Ripristino del gas refrigerante per garantire un climatizzatore efficiente ed aria fresca.",
		icon: "/icons/air_icon.svg",
	},
	{
		title: "Diagnosi iniezione",
		description:
			"Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.",
		icon: "/icons/engine_icon.svg",
	},
	{
		title: "Duplicazione chiavi e telecomandi",
		description:
			"Realizzazione di copie di chiavi e telecomandi per ogni tipo di veicolo.",
		icon: "/icons/key_icon.svg",
	},
	{
		title: "Diagnosi elettronica",
		description:
			"Individuazione e risoluzione di guasti elettronici per un'analisi precisa del tuo veicolo.",
		icon: "/icons/diagnosis_icon.svg",
	},
	{
		title: "Veicoli ibridi ed elettrici",
		description: "Manutenzione specializzata per veicoli ibridi ed elettrici.",
		icon: "/icons/electric_icon.svg",
	},
	{
		title: "Installazione antifurti",
		description:
			"Soluzioni antifurto satellitari Igla e meccanici Defender per la protezione del tuo veicolo.",
		icon: "/icons/anti_theft_icon.svg",
	},
];

/**------------- "Used cars" texts -------------**/
export const USED_CARS_TITLE = "La tua prossima auto, pronta per te";
export const USED_CARS_SUBTITLE =
	"Le migliori auto usate garantite, scelte con attenzione per chi cerca qualità, affidabilità e convenienza.";
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
export const USED_CAR_SCROLL_LABEL_TEXT = "< Scorri per visualizzare >";
export const USED_CARS_UNAVAILABLE_DESCRIPTION =
	"Auto momentaneamente esaurite. Stiamo preparando nuovi arrivi!";
export const USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION =
	"Anteprima non disponibile.";
export const CTA_BUTTON_TEXT = "Verifica disponibilità";
export const BACK_BUTTON_LABEL = "Indietro";

/**------------- "Where we are" texts -------------**/
export const WHERE_WE_ARE_TITLE = "La nostra officina";
export const WHERE_WE_ARE_SUBTITLE =
	"Dove realizziamo i tuoi desideri e ci prendiamo cura della tua auto.";
export const WHERE_WE_ARE_DESCRIPTION =
	"📍MM Eletricar Service si trova <strong>Gravina in Puglia (BA)</strong>, in <strong>Via G. Bizet, 63</strong>.";
export const WHERE_WE_ARE_INFO = [
	{
		title: "Orari di apertura",
		description:
			"- <strong>Lunedì - Venerdì</strong>: 08:30-13:00/15:00-19:00 <br>- <strong>Sabato</strong>: 08:30-13:00",
	},
];
export const GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION =
	"Accetta i cookie di terze parti per visualizzare la nostra posizione sulla mappa.";

/**------------- "Contacts" texts -------------**/
export const CONTACTS_TITLE = "Esperti a tua disposizione";
export const CONTACTS_SUBTITLE =
	"Sempre pronti a risolvere ogni esigenza della tua auto.";
export const CONTACTS = [
	{
		value: PHONE,
		icon: "/icons/phone_icon.svg",
	},
	{
		value: EMAIL,
		icon: "/icons/email_icon.svg",
	},
	{
		value: EMAIL_PEC,
		icon: "/icons/email_icon.svg",
	},
	{
		value: "MM Eletricar Service",
		icon: "/icons/facebook_icon.svg",
	},
];
export const CONTACT_FOOTER_TEXT =
	RAG_SOCIALE + ". " + SITE + ". P. IVA: " + P_IVA + ". REA: " + REA + ".";
