/**------------- Used Car Drawer Collapse constants -------------**/
export const USED_CAR_DRAWER_COLLAPSE_CLASS_NAME =
	"used-car-drawer-collapse";
export const USED_CAR_DRAWER_COLLAPSE_OUTER_LIST_CLASS_NAME =
	"used-car-drawer-collapse-outer-list";
export const USED_CAR_DRAWER_COLLAPSE_INNER_LIST_CLASS_NAME =
	"used-car-drawer-collapse-inner-list";
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