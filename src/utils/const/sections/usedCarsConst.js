import {
	CALENDAR_ICON_LINK,
	CAR_ICON_LINK,
	FUEL_ICON_LINK,
	ROAD_ICON_LINK,
} from "../../internalLinks";

/**------------- Used Cars General constants -------------**/
export const USED_CARS_SECTION_NAME = "Auto usate";
export const USED_CARS_SECTION_ID = "auto-usate";
export const USED_CARS_CONTAINER_CLASS_NAME =
	"used-cars-container";

/**------------- Used Cars Title constant -------------**/
export const USED_CARS_TITLE =
	"Il nostro store di auto usate.";

/**------------- Used Cars Animation constants -------------**/
export const USED_CARS_ANIMATION_SCROLL_THRESHOLD = 0.55;
export const USED_CARS_ANIMATION_Y_START_POSITION = "0";
export const USED_CARS_ANIMATION_Y_FINAL_POSITION = "100%";

/**------------- Used Cars Card constants -------------**/
export const USED_CARS_CARD_CLASS_NAME = "used-cars-card";
export const USED_CARS_CARD_TYPE = "button";
export const USED_CARS_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME =
	"used-cars-card-image-container";
export const USED_CARS_CARD_PRESENTATION_IMAGE_ALT =
	"used-car-image";
export const USED_CARS_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME =
	"used-car-card-overview-flex";
export const USED_CARS_CARD_PRICE_CONTAINER_CLASS_NAME =
	"used-cars-card-price-container";

/**------------- Used Cars Overview constants -------------**/
export const USED_CARS_OVERVIEW_CONTAINER_CLASS_NAME =
	"used-car-overview-container";
export const USED_CARS_OVERVIEW_CONTAINER_GAP = "small";
export const USED_CARS_OVERVIEW_ICON_ALT =
	"used-car-info-icon";

/**------------- Used Cars Drawer constants -------------**/
export const USED_CARS_DRAWER_CLASS_NAME =
	"used-car-drawer";
export const USED_CARS_DRAWER_WIDTH = "100%";
export const USED_CARS_DRAWER_HORIZONTAL_FLEX_CLASS_NAME =
	"used-car-drawer-flex-horizontal";
export const USED_CARS_DRAWER_HORIZONTAL_FLEX_WIDTH = "60%";
export const USED_CARS_DRAWER_VERTICAL_FLEX_CLASS_NAME =
	"used-car-drawer-flex-vertical";
export const USED_CARS_DRAWER_VERTICAL_FLEX_WIDTH = "40%";
export const USED_CARS_DRAWER_OPEN_CLASS_NAME =
	"drawer-open";
export const USED_CARS_DRAWER_CTA_BUTTON_TEXT =
	"Verifica disponibilità";
export const USED_CARS_DRAWER_BACK_BUTTON_LABEL =
	"Indietro";

/**------------- Used Cars Drawer Carousel constant -------------**/
export const USED_CARS_DRAWER_CAROUSEL_CONTAINER_CLASS_NAME =
	"carousel-container";

/**------------- Used Cars Drawer Collapse constants -------------**/
export const USED_CARS_DRAWER_COLLAPSE_CLASS_NAME =
	"used-car-drawer-collapse";
export const USED_CARS_DRAWER_COLLAPSE_OUTER_LIST_CLASS_NAME =
	"used-car-drawer-collapse-outer-list";
export const USED_CARS_DRAWER_COLLAPSE_INNER_LIST_CLASS_NAME =
	"used-car-drawer-collapse-inner-list";

/**------------- Price constants -------------**/
export const PRICE_LOCALES = "it-IT";
export const PRICE_STYLE = "currency";
export const PRICE_CURRENCY = "EUR";

/**------------- Used Cars Information constants -------------**/
export const ALL_USED_CAR_OVERVIEW = [
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
export const ALL_USED_CAR_INFO = [
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

/**------------- Used Cars Fallback constants -------------**/
export const USED_CARS_UNAVAILALE_CONTAINER_CLASS_NAME =
	"unavailable-used-cars-container";
export const USED_CARS_UNAVAILABLE_DESCRIPTION =
	"Auto momentaneamente esaurite. Stiamo preparando nuovi arrivi!";
export const USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION =
	"Anteprima non disponibile.";
export const USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION_ALT =
	"unavailable-used-cars-image";
