/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import UsedCarDrawerInfoPanel from "./UsedCarDrawerInfoPanel";

// Mocks
jest.mock(
	"../../../../components/CustomText/CustomText.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: ({ text }) =>
				React.createElement(
					"div",
					{ "data-testid": "custom-text" },
					text
				),
		};
	}
);
jest.mock(
	"../../../../components/CustomButton/CustomButton.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: ({ text, onClick }) =>
				React.createElement(
					"button",
					{
						"data-testid": "custom-button",
						onClick,
					},
					text
				),
		};
	}
);
jest.mock(
	"../UsedCarDrawerCollapse/UsedCarDrawerCollapse.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "collapse",
				}),
		};
	}
);
jest.mock(
	"../../UsedCarOverview/UsedCarOverview.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "overview",
				}),
		};
	}
);
jest.mock("../../../../utils/const.js", () => ({
	ALL_CONTACTS: [
		{
			value: "PHONE",
			icon: "PHONE_ICON",
		},
	],
	CONTACTS_CLICK_HANDLERS: {
		PHONE: jest.fn(),
	},
	CUSTOM_TEXT_TYPES: {
		HEADING: "HEADING",
		SUBHEADING: "SUBHEADING",
	},
	PHONE: "PHONE",
}));
jest.mock("../../const.js", () => ({
	PRICE_LOCALES: "it-IT",
	PRICE_STYLE: "currency",
	PRICE_CURRENCY: "EUR",
}));
jest.mock("./const.js", () => ({
	USED_CAR_DRAWER_CTA_BUTTON_TEXT: "Contact us",
}));
jest.mock("./style-handler.js", () => ({
	getUsedCarDrawerInfoPanelCarNameStyle: () => ({}),
}));

/**
 * Test suite for UsedCarDrawerInfoPanel component.
 * The test suite contains:
 * 1. A test veryfing the rendering of used car's basic information.
 * 2. A test veryfing the rendering of the overview section.
 * 3. A test veryfing the rendering of CTA button and click handler execution.
 * 4. A test veryfing the rendering of collapse section.
 */
describe("UsedCarDrawerInfoPanel", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: BASIC INFORMATION RENDERING
	 * Should render car name and formatted price.
	 */
	it("should render car name and price", () => {
		render(
			<UsedCarDrawerInfoPanel
				usedCarOverview={{
					name: "Car Name",
					price: "25000",
				}}
				usedCarInfo={{
					cylinders: "4",
				}}
			/>
		);

		const texts = screen.getAllByTestId("custom-text");

		expect(texts[0]).toHaveTextContent("Car Name");
		expect(texts[1].textContent).toContain("25.000,00");
	});

	/**
	 * CASE 2: OVERVIEW RENDERING
	 * Should render UsedCarOverview component.
	 */
	it("should render overview component", () => {
		render(
			<UsedCarDrawerInfoPanel
				usedCarOverview={{
					name: "Car Name",
					price: "25000",
				}}
				usedCarInfo={{
					cylinders: "4",
				}}
			/>
		);

		expect(
			screen.getByTestId("overview")
		).toBeInTheDocument();
	});

	/**
	 * CASE 3: CTA BUTTON CLICK
	 * Should render CTA button and trigger click handler.
	 */
	it("should render CTA button and trigger click handler", () => {
		const mockClick = require("../../../../utils/const.js")
			.CONTACTS_CLICK_HANDLERS.PHONE;

		render(
			<UsedCarDrawerInfoPanel
				usedCarOverview={{
					name: "Car Name",
					price: "25000",
				}}
				usedCarInfo={{
					cylinders: "4",
				}}
			/>
		);

		const button = screen.getByTestId("custom-button");
		expect(button).toBeInTheDocument();

		fireEvent.click(button);

		expect(mockClick).toHaveBeenCalled();
	});

	/**
	 * CASE 4: COLLAPSE RENDERING
	 * Should render UsedCarDrawerCollapse component.
	 */
	it("should render collapse component", () => {
		render(
			<UsedCarDrawerInfoPanel
				usedCarOverview={{
					name: "Car Name",
					price: "25000",
				}}
				usedCarInfo={{
					cylinders: "4",
				}}
			/>
		);

		expect(
			screen.getByTestId("collapse")
		).toBeInTheDocument();
	});
});
