/**------------- Used Car Overview constants -------------**/

/* — General — */
export const USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME =
	"used-car-overview-container";

/* — Style — */
export const USED_CAR_OVERVIEW_CONTAINER_GAP = "small";

/* — Icons — */
export const USED_CAR_OVERVIEW_ICON_ALT =
	"used-car-info-icon";

/* — Links — */
export const CALENDAR_ICON_LINK =
	"/icons/calendar-icon.svg";
export const ROAD_ICON_LINK = "/icons/road-icon.svg";
export const FUEL_ICON_LINK = "/icons/fuel-icon.svg";
export const CAR_ICON_LINK = "/icons/car-icon.svg";

/* — Used Car Overview Info — */
export const ALL_USED_CAR_OVERVIEW_INFO = [
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
