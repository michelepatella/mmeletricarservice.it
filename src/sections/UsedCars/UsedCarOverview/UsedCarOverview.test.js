/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsedCarOverview from "./UsedCarOverview";
import { getUsedCarOverviewTextStyle } from "./style-handler.js";

// Mocks
jest.mock("./const.js", () => ({
	ALL_USED_CAR_OVERVIEW_INFO: [
		{
			name: "year",
			title: "Year",
			icon: "year-icon.png",
		},
		{
			name: "mileage",
			title: "Mileage",
			icon: "mileage-icon.png",
		},
	],
	USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME: "overview-container",
	USED_CAR_OVERVIEW_CONTAINER_GAP: 8,
	USED_CAR_OVERVIEW_ICON_ALT: "used-car-icon",
}));
jest.mock("./style-handler.js", () => ({
	getUsedCarOverviewTextStyle: jest.fn(() => ({ color: "black" })),
}));
jest.mock("../../../components/CustomText/CustomText.js", () => ({
	__esModule: true,
	default: ({ text }) => <div data-testid="custom-text">{text}</div>,
}));

/**
 * Test suite for UsedCarOverview component.
 * The test suite contains:
 * 1. A test to verify that all overview items are rendered.
 * 2. A test to verify that title mode renders correct labels.
 * 3. A test to verify that value mode renders correct values.
 * 4. A test to verify fallback "-" when data is missing.
 */
describe("UsedCarOverview", () => {

	const mockOverview = {
		year: 2020,
		mileage: 50000,
	};

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: RENDER ALL ITEMS (TITLE MODE)
	 * Should render all overview items with their titles.
	 */
	it("should render all overview items with titles", () => {

		render(
			<UsedCarOverview
				usedCarOverview={mockOverview}
				showTitle={true}
			/>
		);

		expect(screen.getByText("Year")).toBeInTheDocument();
		expect(screen.getByText("Mileage")).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDER VALUES MODE
	 * Should render used car values when showTitle is false.
	 */
	it("should render values when showTitle is false", () => {

		render(
			<UsedCarOverview
				usedCarOverview={mockOverview}
				showTitle={false}
			/>
		);

		expect(screen.getByText("2020")).toBeInTheDocument();
		expect(screen.getByText("50000")).toBeInTheDocument();
	});

	/**
	 * CASE 3: FALLBACK VALUE
	 * Should render "-" when value is missing.
	 */
	it("should render fallback when value is missing", () => {

		render(
			<UsedCarOverview
				usedCarOverview={{}}
				showTitle={false}
			/>
		);

		const fallbacks = screen.getAllByText("-");
		expect(fallbacks.length).toBeGreaterThan(0);
	});

	/**
	 * CASE 4: STYLE HANDLER CALL
	 * Should call style handler for each item.
	 */
	it("should call style handler for each item", () => {

		render(
			<UsedCarOverview
				usedCarOverview={mockOverview}
				showTitle={true}
			/>
		);

		expect(getUsedCarOverviewTextStyle).toHaveBeenCalled();
	});
});