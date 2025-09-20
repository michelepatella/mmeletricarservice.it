/**------------- Services constants -------------**/

/* — General — */
export const SERVICES_CONTAINER_CLASS_NAME =
	"services-container";

/* — Title — */
export const SERVICES_TITLE = [
	{
		text: "Prestazioni.",
		gradient: "var(--color-red-gradient)",
	},
	{
		text: "Sicurezza.",
		gradient: "var(--color-blue-gradient)",
	},
	{
		text: "Affidabilità.",
		gradient: "var(--color-green-gradient)",
	},
];
export const SERVICES_TITLE_ANIMATION_LETTERS_DELAY = 50;
export const SERVICES_TITLE_ANIMATION_WORDS_DELAY = 200;
export const SERVICES_TITLE_ANIMATION_TRIGGER_ONCE = true;
export const SERVICES_TITLE_ANIMATION_THRESHOLD = 0.8;

/* — Links — */
export const CPU_ICON_LINK = "/icons/cpu-icon.svg";
export const WRENCH_ICON_LINK = "/icons/wrench-icon.svg";
export const CONTROL_PANEL_ICON_LINK =
	"/icons/control-panel-icon.svg";
export const DASHBOARD_ICON_LINK =
	"/icons/dashboard-icon.svg";
export const FILTER_ICON_LINK = "/icons/filter-icon.svg";
export const AIR_ICON_LINK = "/icons/air-icon.svg";
export const ENGINE_ICON_LINK = "/icons/engine-icon.svg";
export const KEY_ICON_LINK = "/icons/key-icon.svg";
export const DIAGNOSIS_ICON_LINK =
	"/icons/diagnosis-icon.svg";
export const ELECTRIC_ICON_LINK =
	"/icons/electric-icon.svg";
export const ANTI_THEFT_ICON_LINK =
	"/icons/anti-theft-icon.svg";
export const SERVICES_BACKGROUND_IMAGE_LINK =
	"/images/services-background.avif";

/* — Services — */
const ALL_SERVICES_DATA = [
	[
		"Manutenzione Centralina",
		"Controllo ed aggiornamento della centralina elettronica per garantire il corretto funzionamento del veicolo.",
		CPU_ICON_LINK,
	],
	[
		"Diagnosi Elettronica",
		"Individuazione e risoluzione di guasti elettronici per un'analisi precisa del veicolo.",
		DIAGNOSIS_ICON_LINK,
	],
	[
		"Diagnosi Iniezione",
		"Analisi e riparazione dei sistemi d'iniezione per ottimizzare le prestazioni del motore.",
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
		"Riparazione e calibrazione degli strumenti digitali ed analogici del cruscotto.",
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
