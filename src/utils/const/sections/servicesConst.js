import {
	AIR_ICON_LINK,
	ANTI_THEFT_ICON_LINK,
	CONTROL_PANEL_ICON_LINK,
	CPU_ICON_LINK,
	DASHBOARD_ICON_LINK,
	DIAGNOSIS_ICON_LINK,
	ELECTRIC_ICON_LINK,
	ENGINE_ICON_LINK,
	FILTER_ICON_LINK,
	KEY_ICON_LINK,
	WRENCH_ICON_LINK,
} from "../../internalLinks";

/**------------- Services General constants -------------**/
export const SERVICES_SECTION_NAME = "Servizi";
export const SERVICES_SECTION_ID = "servizi";
export const SERVICES_CONTAINER_CLASS_NAME =
	"services-container";

/**------------- Services Title constant -------------**/
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

/**------------- Services Title Animation constants -------------**/
export const SERVICES_TITLE_ANIMATION_LETTERS_DELAY = 50;
export const SERVICES_TITLE_ANIMATION_WORDS_DELAY = 200;
export const SERVICES_TITLE_ANIMATION_TRIGGER_ONCE = true;
export const SERVICES_TITLE_ANIMATION_THRESHOLD = 0.8;

/**------------- All Services constants -------------**/
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
