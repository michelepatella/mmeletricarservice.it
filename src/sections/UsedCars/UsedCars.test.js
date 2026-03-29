/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsedCars from "./UsedCars";
import { useUsedCarsOverview } from "./use-used-cars-overview/use-used-cars-overview.js";
import { USED_CARS_UNAVAILABLE_DESCRIPTION } from "./const.js";

// Mocs
jest.mock(
	"./use-used-cars-overview/use-used-cars-overview.js",
	() => ({
		useUsedCarsOverview: jest.fn(),
	})
);
jest.mock(
	"../../components/SectionContainer/SectionContainer.js",
	() => ({
		__esModule: true,
		default: ({ children, id }) => (
			<div data-testid="section-container" id={id}>
				{children}
			</div>
		),
	})
);
jest.mock(
	"../../components/SectionBackground/SectionBackground.js",
	() => ({
		__esModule: true,
		default: ({ children }) => (
			<div data-testid="section-background">{children}</div>
		),
	})
);
jest.mock(
	"../../components/CustomText/CustomText.js",
	() => ({
		__esModule: true,
		default: ({ text }) => (
			<div data-testid="custom-text">{text}</div>
		),
	})
);
jest.mock(
	"../../components/LoadingOutlined/LoadingOutlined.js",
	() => ({
		__esModule: true,
		default: () => <div data-testid="loading" />,
	})
);
jest.mock("./UsedCarCard/UsedCarCard.js", () => ({
	__esModule: true,
	default: ({ usedCarOverview }) => (
		<div data-testid="used-car-card">
			{usedCarOverview?.id}
		</div>
	),
}));

/**
 * Test suite for the UsedCars component.
 * The test suite contains:
 * 1. A test verifying the loading state rendering during data loading
 * 2. A test verifying the loading state rendering after data loading
 * 3. A test verifying the used car list rendering when data exists
 * 4. A test verifying the empty state rendering when no data exists
 */
describe("UsedCars", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: LOADING STATE DURING DATA LOADING
	 * Should render loading outline when data is loading.
	 */
	it("should show loading outline when data is loading", () => {
		useUsedCarsOverview.mockReturnValue({
			usedCarsOverview: [],
			isLoading: true,
		});

		render(<UsedCars />);

		expect(
			screen.getByTestId("loading")
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: LOADING STATE AFTER DATA LOADING
	 * Should hide loading outline when data loading is finished.
	 */
	it("should hide loading outline when data loading is finished", () => {
		useUsedCarsOverview.mockReturnValue({
			usedCarsOverview: [],
			isLoading: false,
		});

		render(<UsedCars />);

		expect(
			screen.queryByTestId("loading")
		).not.toBeInTheDocument();
	});

	/**
	 * CASE 3: DATA PRESENT
	 * Should render used car cards when data exists.
	 * Should not render empty state.
	 */
	it("should render used car cards when data exists", () => {
		useUsedCarsOverview.mockReturnValue({
			usedCarsOverview: [{ id: 1 }, { id: 2 }],
			isLoading: false,
		});

		render(<UsedCars />);

		expect(
			screen.getAllByTestId("used-car-card")
		).toHaveLength(2);

		expect(
			screen.queryByText(USED_CARS_UNAVAILABLE_DESCRIPTION)
		).not.toBeInTheDocument();
	});

	/**
	 * CASE 4: DATA NOT PRESENT
	 * Should render empty state when no cars exist.
	 */
	it("should render empty state when no cars exist", () => {
		useUsedCarsOverview.mockReturnValue({
			usedCarsOverview: [],
			isLoading: false,
		});

		render(<UsedCars />);

		expect(
			screen.getByText(USED_CARS_UNAVAILABLE_DESCRIPTION)
		).toBeInTheDocument();

		expect(
			screen.queryByTestId("used-car-card")
		).not.toBeInTheDocument();
	});
});
